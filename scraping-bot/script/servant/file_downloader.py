import urllib.request


def serve(url, file_name):
    urllib.request.urlretrieve(url, "{0}".format(file_name))
