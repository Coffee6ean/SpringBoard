# Querying -

```python
Pet.query.all()

> Equivalent to: 
SELECT *
FROM pets
```

```python
Pet.query.get(1)

> Equivalent to: 
SELECT *
FROM pets
WHERE id = 1
```

```python
Pet.query.filter_by(species='dog').all()
- o -
Pet.query.filter(Pet.species='dog').all()

> Equivalent to: 
SELECT *
FROM pets
WHERE species = 'dog'
```

```python
Pet.query.filter(Pet.hunger < 10).all()

> Equivalent to: 
SELECT *
FROM pets
WHERE hunger < 10
```

```python
Pet.query.filter(Pet.hunger < 15,
                 Pet.species == 'dog').all()

> Equivalent to: 
SELECT *
FROM pets
WHERE hunger < 15
  AND species = 'dog'
```

### Fetching Records

**.get(pk):** Get single record with that primary key value

**.all():** Get all records as a list

**.first():** Get first record or ***None***

**.one():** Get first record, error if 0 or if > 1

**.one_or_none():** Get first record, error if >1, None if 0
