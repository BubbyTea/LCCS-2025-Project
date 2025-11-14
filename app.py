from flask import Flask, render_template, url_for, request, jsonify #importing Flask and render_template
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from werkzeug.utils import redirect
import pandas as pd
import plotly.graph_objects as go
import plotly.io as pio
import json



df = pd.read_csv('laptop-price-final.csv')
app = Flask(__name__) #refrencing this file

#prevents errors
df['Weight'] = pd.to_numeric(df['Weight'], errors='coerce')
df['Price'] = pd.to_numeric(df['Price'], errors='coerce')
df.dropna(subset=['Weight', 'Price'], inplace=True)



app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db' #this will tell u where the database is located
db = SQLAlchemy(app)

class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(200), nullable=False)
    completed =db.Column(db.Integer, default=0)
    date_created = db.Column(db.DateTime,default=datetime.utcnow)

    def __repr__(self):
        return '<Task %r>' % self.id

@app.route('/mean')
def mean():
    meanMonthlyIncome = df['Price'].mean()
    roundedMean = round(meanMonthlyIncome, 2)
    return jsonify(resultMean=f'The Mean/Average price is: €{round(roundedMean, 2)}.')

@app.route('/median')
def median():
    medianMonthlyIncome = df['Price'].median()
    roundedMedian = round(medianMonthlyIncome, 2)
    return jsonify(resultMedian=f'The Median price is: €{roundedMedian}.')

@app.route('/mode')
def mode():
    modeMonthlyIncome = df['Price'].mode()[0]
    roundedMode = round(modeMonthlyIncome, 2)
    return jsonify(resultMode=f'The Mode price is: €{roundedMode}.')

@app.route('/correlation')
def correlation():
    corrSleepScreen = df['Price'].corr(df['Weight'])
    rounded = round(corrSleepScreen, 2)
    return jsonify(resultCorrelation=f'The correlation between price and weight is {rounded}.')

@app.route('/form')
def form():
    return render_template('form.html')







@app.route('/')
def home():
    # Scatter Plot
    fig_scatter = go.Figure(data=go.Scatter(
        x=df['Weight'],  # X values
        y=df['Price'],  # Y values
        mode='markers',  # Only markers (dots)
        marker=dict(
            size=12,  # Size of the markers
            color='blue',  # Color of the markers
            opacity=0.7,  # Opacity of the markers
            line=dict(width=1, color='black')  # Border line around markers
        ),
        name='Data Points'
    ))

    fig_scatter.update_layout(
        title='Interactive Scatter Plot',
        xaxis_title='Weight (kg)',
        yaxis_title='Price (EUR)',
        template='plotly_dark',
        hovermode='closest',
        autosize=True,  # Let Plotly auto resize the graph
        margin=dict(l=50, r=50, b=50, t=50),
    )

    # Box Plot for CPU Brands
    fig_box = go.Figure()

    # Grouping by CPU Brand and adding a box plot for each group
    for cpu_brand in df['Cpu_brand'].unique():
        cpu_prices = df[df['Cpu_brand'] == cpu_brand]['Price']
        fig_box.add_trace(go.Box(
            y=cpu_prices,
            name=cpu_brand,
            boxmean='sd',  # Show the mean and standard deviation
            marker=dict(color='orange'),
        ))

    fig_box.update_layout(
        title='Price Distribution by CPU Brand',
        yaxis_title='Price (EUR)',
        template='plotly_dark',
        autosize=True,  # Let Plotly auto resize the graph
        margin=dict(l=50, r=50, b=50, t=50),
    )

    # Convert both Plotly figures to HTML
    plot_html_scatter = pio.to_html(fig_scatter, full_html=False)
    plot_html_box = pio.to_html(fig_box, full_html=False)

    # Pass both HTML representations to the template
    return render_template('index.html', plot_html_scatter=plot_html_scatter, plot_html_box=plot_html_box)




# @app.route('/generateGraph')
# def generateGraph():
#     graph_json = generate_scatter_plot()
#     return jsonify(resultGraph=graph_json)







#renders recommendations page
@app.route('/recommendations')
def recommendations():
    return render_template('Recommendations.html')

# @app.route('/form')
# def form():
#     return render_template('form.html')

@app.route('/delete/<int:id>')
def delete(id):
    task_to_delete =Todo.query.get_or_404(id)

    try:
        db.session.delete(task_to_delete)
        db.session.commit()
        return redirect('/form')
    except:
        return 'there was a problem deleting this task'





@app.route('/update/<int:id>', methods=['GET','POST'])  #index route
def update(id):
    task = Todo.query.get_or_404(id)
    if request.method == 'POST':
        task.content = request.form['content']

        try:
            db.session.commit()
            return redirect('/form')

        except:
            return 'There was an issue'
    else:
        return render_template('update.html', task=task)


if __name__ == "__main__":
    app.run(debug=True)

#this is basic flask webpage