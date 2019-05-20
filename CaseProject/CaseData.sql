CREATE database CasestudyDB
use CasestudyDB
Create table Workout_Category(
category_id int identity primary key,
category_name varchar (64)
)
Create table Workout_Collection(
Workout_title varchar(128),
WorkoutNote  varchar(256),
Calories_Burn_Per_min float,
category_id int foreign key references Workout_Category(category_id),
workout_id int primary key

)
Create table Workout_Active(
Workout_id int foreign key references Workout_Collection(workout_id),
start_time time,
starts_date date,
end_time time,
end_date date,
comment varchar(64),
statuss bit,
names varchar (15) primary key
)
drop table Workout_Active
select * from Workout_Category
insert into Workout_Category values ('Running')
