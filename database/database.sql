CREATE TABLE user(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    country VARCHAR(50) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

INSERT INTO user(name, country) VALUES ('David Quinaluisa', 'Ecuador'), ('Diana Perez', 'Colombia');