from pydantic_settings import BaseSettings
from functools import lru_cache


class Settings(BaseSettings):
    app_name: str = "starter"
    debug: bool = False
    database_url: str = "postgresql+asyncpg://postgres:postgres@db:5432/starter"
    database_url_sync: str = "postgresql://postgres:postgres@db:5432/starter"

    model_config = {"env_file": ".env", "env_file_encoding": "utf-8"}


@lru_cache
def get_settings() -> Settings:
    return Settings()
