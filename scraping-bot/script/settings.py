import os
from dotenv import load_dotenv

load_dotenv(verbose=True)
load_dotenv("../../.env")

DL_FILE = "https://web.pref.hyogo.lg.jp/kk03/documents/yousei.xlsx"
DL_FILE_NAME = "covid19-file.xlsx"
DB_CONNECT = os.environ.get("DB_CONNECT").strip("\"")
