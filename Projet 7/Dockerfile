FROM php:8.2-apache

# Copier les fichiers du jeu dans le dossier web d'Apache
COPY index.html /var/www/html/index.html
COPY save.php /var/www/html/save.php
COPY results.json /var/www/html/results.json

# Droits d'écriture sur results.json pour Apache
RUN chmod 777 /var/www/html/results.json

EXPOSE 80