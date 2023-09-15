# Utiliza una imagen de Jenkins como base
FROM jenkins/jenkins:latest

# Instala Xvfb
USER root

RUN apt-get update && apt-get install -y libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

USER jenkins

# Resto de las configuraciones de Jenkins, si es necesario