DROP DATABASE IF EXISTS myapp;

CREATE DATABASE myapp;
USE myapp;

create table lists (
    id integer auto_increment,
    value text,
    primary key (id)
)

-- docker-compose up --build 로 실행

-- docker ps 로 mysql 컨테이너 id 찾기

-- docker exec -it mysql_id bash 로 커맨드 창

-- mysql -u root -p 비밀번호(yml 안에 환경 변수로 적힌 것)

-- show databases;

-- drop database if exists myapp;

-- create databases myapp;

-- use myapp;

-- create table lists (

--    id INTEGER AUTO_INCREMENT,

--    value TEXT,

--    PRIMARY KEY (id)

-- );