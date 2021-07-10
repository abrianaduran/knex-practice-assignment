BEGIN;

INSERT INTO blogful_articles
    (title, date_published, content)
VALUES
  ('Red a book', '2015-05-06',       'a book that is red'),
  ('Green machine',  '2015-05-09',       'a machine that is green'),
  ('Blue magoo',     '2015-02-22',       'a magoo that is blue'),
  ('Yellow jello',      '2016-05-05',       'a jello that is yellow'),
  ('Orange blorange',  '2016-08-08',       'a blorange because nothing rhymes with orange'),
  ('Indigo vertigo', '2017-10-09',       'vertigo that is indigo'),
  ('Purple plurple',  '2017-17-10',       'a plurple that is purple'),
  ('Pink blink',     '2018-09-02',       'do you see pink when you blink?'),
  ('Lime slime',      '2019-07-31',       'What color did you think it would be?'),
  ('Lavender candor', '2019-02-13',       'Candor that is lavender'),
  ('Beautiful Coquelicot  ',  '2019-03-16',       'this is a word'),
  ('Amaranth at last',     '2019-03-31',       'this is a good word'),
  ('Glaucous glow', '2020-04-03',       'look at all my words'),
  ('Celadon dawn',      '2020-05-05',       'this is more words'),
  ('Aureolin grin',      '2020-05-05', 'so much to type'),
  ('Cerulean Boolean', '2021-01-05', 'too many words'),
  ('Vermillion Brilliant',  '2021-01-05', 'word word word word word'),
  ('Clear veneer', '2021-02-05', 'three words'),
  ('Turquoise noise',  '2021-03-05', 'word'),
  ('Gamboge undertoes',      '2021-03-05', 'word'),
  ('Chartreuse Shampoos',  '2021-05-05', 'word');
  
COMMIT;
