# Use the official Directus image
FROM directus/directus:latest

# Set working directory
WORKDIR /directus

# Copy project files (excluding unnecessary files via .dockerignore)
COPY . /directus/project

# Expose the port Directus runs on
EXPOSE 8055

# Start Directus
CMD ["directus", "start"]
