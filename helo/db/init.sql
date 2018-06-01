drop table if exists heloposts;

create table if not exists heloposts (
  id serial primary key,
  title text,
  img text,
  content text,
  author_id text
);

drop table if exists helousers;

create table if not exists helousers (
  id serial primary key,
  username text,
  password text,
  profile_pic text
);