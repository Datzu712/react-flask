from pydantic import BaseSettings, ValidationError
from typing import Literal

class Settings(BaseSettings):
    ENV: Literal['development', 'production', 'test']
    PORT: str
    COOKIE_SECRET: str
    JWT_TTL: str
    JWT_SECRET: str
    
    class Config:
        env_file = ".env"

try:
    settings = Settings()
except ValidationError as e:
    print(e.json())