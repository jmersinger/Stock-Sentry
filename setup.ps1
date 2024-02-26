# Set execution policy for the current process
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process

# Activate virtual environment
.\venv\Scripts\Activate

# Install Flask
pip install Flask

# Save dependencies to requirements.txt
pip freeze > requirements.txt
