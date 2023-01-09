CREATE TABLE friends
(
  id bigserial PRIMARY KEY,
  name text NOT NULL
);

INSERT INTO friends(name) VALUES
('Ivan'),
('Kat'),
('Daniel');