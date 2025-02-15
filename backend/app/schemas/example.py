from pydantic import BaseModel

class ExampleSchema(BaseModel):
    id: int
    name: str
    description: str = None

class ExampleCreateSchema(BaseModel):
    name: str
    description: str = None

class ExampleUpdateSchema(BaseModel):
    name: str = None
    description: str = None