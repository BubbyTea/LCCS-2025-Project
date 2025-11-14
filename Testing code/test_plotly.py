import plotly.graph_objects as go

# Create a scatter plot
fig = go.Figure(data=go.Scatter(
    x=[1, 2, 3, 4, 5],  # X values
    y=[10, 11, 12, 13, 14],  # Y values
    mode='markers',  # Only markers (dots)
    marker=dict(
        size=12,  # Size of the markers
        color='blue',  # Color of the markers
        opacity=0.6,  # Opacity of the markers
        line=dict(width=2, color='black')  # Border line around markers
    ),
    name='Data Points'
))

# Update layout for better interactivity
fig.update_layout(
    title='Interactive Scatter Plot',
    xaxis_title='X Axis',
    yaxis_title='Y Axis',
    template='plotly_dark',  # You can choose different themes like 'plotly', 'ggplot2', etc.
    hovermode='closest'  # Shows info about the closest point when hovering
)

# Show the interactive plot
fig.show()
