from functools import lru_cache

from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    app_name: str
    debug: bool

    db_host: str
    db_port: int
    db_user: str
    db_password: str
    db_name: str

    cors_origins: list[str]

    model_config = {"env_file": ".env", "env_file_encoding": "utf-8"}


@lru_cache
def get_settings() -> Settings:
    return Settings()
