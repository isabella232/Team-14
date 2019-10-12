CREATE TABLE donor (
  id        serial not null primary key,
  name      text   not null,
  email     text   not null,
  college   text   not null,
  client_id text,
  recurring bool
);

CREATE TABLE student (
  id                serial not null primary key,
  name              text,
  email             text,
  school            text,
  fafsaid           text,
  city              text,
  mealsleft         smallint default 0,
  weeklymealsneeded smallint default 0,
  mealsredeemed     smallint default 0,
  thankyoumsg       text
);
