ALTER TABLE client
add column user_id int after id,
ADD FOREIGN KEY (user_id) REFERENCES user(id);