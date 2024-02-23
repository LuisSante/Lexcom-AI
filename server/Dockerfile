FROM python:3.10-slim

ENV PYTHONUNBUFFERED True

ENV TZ=UTC

WORKDIR /app

COPY . .
RUN pip install --no-cache-dir -r requirements/requirements.txt
RUN pip install pymongo[srv]
RUN pip install gunicorn
# COPY .dockerignore .

ENV DJANGO_SETTINGS_MODULE=webIA.settings

RUN python manage.py migrate
RUN python manage.py collectstatic --noinput

WORKDIR /app

# Configura el comando predeterminado para ejecutar la aplicación Django con Gunicorn
CMD exec gunicorn webIA.wsgi:application --bind :${PORT:-8080} --workers 1 --threads 8 --timeout 0

# CMD ["python", "/webIA/manage.py", "runserver"]
