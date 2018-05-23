# version 1.0.0
# Apache + PHP 5.6

FROM ubuntu:17.10
ENV DEBIAN_FRONTEND=noninteractive

MAINTAINER Leonardo Pricevicius <leonardo@okn.com.br>

# clean and update sources
RUN apt-get clean && apt-get update

# install lo locales support
RUN apt-get install locales

# Set the locale
RUN locale-gen en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

# instalations
RUN apt-get update && apt-get install -y software-properties-common nano exif net-tools

RUN add-apt-repository ppa:ondrej/php

RUN apt-get update &&  apt-get install -y \
    libbz2-dev libfreetype6-dev libjpeg-dev libtiff-dev libgd-dev \
    libmcrypt-dev libpng-dev libxml2-dev zlib1g-dev \
    libapache2-mod-php5.6 \
    php5.6 \
    php-fpm php5.6-cli php5.6-common php5.6-intl php5.6-bcmath php5.6-mbstring php5.6-xml \
    php-zip php-apcu php5.6-json php-gd php5.6-curl php5.6-mcrypt php5.6-mysql \
    php-memcached php5.6-opcache php5.6-gd


# mysql-client mysql-server

# Manually set up the apache environment variables
ENV APACHE_RUN_USER www-data
ENV APACHE_RUN_GROUP www-data
ENV APACHE_LOG_DIR /var/log/apache2
ENV APACHE_LOCK_DIR /var/lock/apache2
ENV APACHE_PID_FILE /var/run/apache2.pid

#COPY config/php.ini /usr/local/etc/php/


# Update the default apache site with the config we created.
#ADD config/apache2.conf /etc/apache2/sites-enabled/000-default.conf

RUN a2enmod headers
RUN a2enmod rewrite
CMD ["/usr/sbin/apache2ctl","restart"]

# Add Let's encrypt ssl certificate and auto renew
#RUN add-apt-repository ppa:certbot/certbot
#RUN apt-get update && apt-get install -y python-certbot-apache

#ADD config/install_ssl.sh /var/www/install_ssl.sh
#RUN sh /var/www/install_ssl.sh

# adding Let's encrypt cronjob to auto renew the certificate in 90 days
#RUN (crontab -l && echo "@monthly certbot renew") | crontab -
# testing auto renew...
#RUN certbot renew --dry-run

# make the src a volume
#VOLUME ["www/:/var/www/html/"]

RUN chown -R www-data:www-data /var/www/html

EXPOSE 80

#ENTRYPOINT ["/usr/sbin/apache2ctl","-DFOREGROUND"]
CMD ["/bin/bash"]
