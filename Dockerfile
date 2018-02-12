FROM ubuntu:16.04

RUN apt-get update && apt-get install -y \
  python python-pip python-dev build-essential

WORKDIR /app/voxbox
COPY . .
RUN pip install -r requirements.txt

# EXPOSE 5000
ENTRYPOINT ["python"]
CMD ["app.py"]

