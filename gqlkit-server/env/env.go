package env

import (
	"os"
	"strings"
)

// var LoadErr = godotenv.Load("../.env")

var (
	GQL_SERVER_PORT         = os.Getenv("GQL_SERVER_PORT")
	GQL_SERVER_ALLOW_ORIGIN = os.Getenv("GQL_SERVER_ALLOW_ORIGIN")
	DB_CONNECT              = strings.Trim(os.Getenv("DB_CONNECT"), "\"")
)
