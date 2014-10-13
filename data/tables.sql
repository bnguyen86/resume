create table myresume(
r_id int,
r_date date,
primary key (r_id)
);

create table education(
e_id int,
date_from date,
date_to date,
school_name varchar(50),
program varchar(50),
location varchar(50),
r_id int,
primary key (e_id),
foreign key (r_id) references myresume(r_id)
);

create table courses(
course_code char(6),
couse_title varchar(100),
e_id int,
primary key (course_code),
foreign key (e_id) references education(e_id)
);

create table skills_major(
sm_name varchar(25),
primary key (sm_name)
);

create table skills(
s_name varchar(50),
sm_name varchar(25),
primary key (s_name),
foreign key (sm_name) references skills_major(sm_name)
);

create table work_exp(
w_id int,
date_from date,
date_to date,
company_name varchar (50),
title varchar(50),
location varchar(50),
r_id int, 
primary key (w_id),
foreign key (r_id) references myresume(r_id)
);

create table work_desc(
wd_id int,
description varchar(500),
w_id int,
primary key (wd_id),
foreign key (w_id) references work_exp(w_id)
);

create table work_skill(
w_id int,
s_name varchar(50),
primary key (w_id, s_name),
foreign key (w_id) references work_exp(w_id),
foreign key (s_name) references skills(s_name)
);

create table projects(
p_id int,
p_name varchar(100),
p_date date,
r_id int,
primary key (p_id),
foreign key (r_id) references myresume(r_id)
);

create table project_desc(
pd_id int, 
description varchar(500),
p_id int,
primary key (pd_id),
foreign key (p_id) references projects(p_id)
);

create table project_skill(
p_id int,
s_name varchar(50),
primary key (p_id, s_name),
foreign key (p_id) references projects(p_id),
foreign key (s_name) references skills(s_name)
);

create table hobbies(
h_id int,
description varchar(500),
r_id int,
primary key (h_id),
foreign key (r_id) references myresume(r_id)
);

