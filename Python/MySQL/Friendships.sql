SELECT * FROM users;
SELECT * FROM friendships;

SELECT users.first_name, users.last_name, users2.first_name AS 'friend_first_name', users2.last_name AS 'friend_last_name'
FROM users
JOIN friendships ON users.id = friendships.user_id
JOIN users AS users2 ON users2.id = friendships.friend_id
ORDER BY first_name;

INSERT users(id, first_name, last_name, created_at, updated_at) VALUES(1, 'Chris', 'Baker', now(), now());
INSERT users(id, first_name, last_name, created_at, updated_at) VALUES(2, 'Diana', 'Smith', now(), now());
INSERT users(id, first_name, last_name, created_at, updated_at) VALUES(3, 'James', 'Johnson', now(), now());
INSERT users(id, first_name, last_name, created_at, updated_at) VALUES(4, 'Jessica', 'Davidson', now(), now());
 
INSERT friendships(id, user_id, friend_id, created_at, updated_at) VALUES(1, 1, 4, now(), now());
INSERT friendships(id, user_id, friend_id, created_at, updated_at) VALUES(2, 1, 3, now(), now());
INSERT friendships(id, user_id, friend_id, created_at, updated_at) VALUES(3, 1, 2, now(), now());
INSERT friendships(id, user_id, friend_id, created_at, updated_at) VALUES(4, 2, 1, now(), now());
INSERT friendships(id, user_id, friend_id, created_at, updated_at) VALUES(5, 3, 1, now(), now());
INSERT friendships(id, user_id, friend_id, created_at, updated_at) VALUES(6, 4, 1, now(), now());



