CREATE DATABASE Villains;
use Villains;
CREATE TABLE villains (
	id INT auto_increment,
	name VARCHAR(255),
	movie VARCHAR(255),
	slug VARCHAR(255),
    primary key(slug)
);
insert into villains (name, movie, slug) values ("Captain Hook", "Peter Pan", "captain-hook"), ("Cruella de Vil", "One Hundred and One Dalmations", "cruella-de-vil"), ("Gaston", "Beauty and the Beast", "gaston");
insert into villains (name, movie, slug) values ("Hades", "Hercules", "hades"), ("Horned King", "The Black Cauldron", "horned-king"), ("Jafar", "Aladdin", "jafar");
insert into villains (name, movie, slug) values ("Lady Tremaine", "Cinderella", "lady-tremaine"), ("Madame Medusa", "The Rescuers", "madame-medusa"), ("Madam Mim", "The Sword in the Stone", "madam-mim");
insert into villains (name, movie, slug) values ("Maleficent", "Sleeping Beauty", "maleficent"), ("Prince John", "Robin Hood", "prince-john"), ("Sir Hiss", "Robin Hood", "sir-hiss");
insert into villains (name, movie, slug) values ("Queen Grimhilde", "Snow White and the Seven Dwarfs", "queen-grimhilde"), ("Queen of Hearts", "Alice in Wonderland", "queen-of-hearts"), ("Scar", "The Lion King", "scar");
insert into villains (name, movie, slug) values ("Shan Yu", "Mulan", "shan-yu"), ("Shere Khan", "The Jungle Book", "shere-khan"), ("Ursula", "The Little Mermaid", "ursula");

SELECT * FROM teams;