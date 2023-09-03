INSERT INTO department (id, department_name)
VALUES
    (1, "sales"),
    (2, "marketing"),
    (3, "support"),
    (4, "development"),
    (5, "product");

INSERT INTO role (id, title, salary, department_id)
VALUES
    (1, "regional sales manager", 100000.00, 1),
    (2, "inside sales", 50000.00, 1),
    (3, "market researcher", 40000.00, 2),
    (4, "marketing account manager", 60000.00, 2),
    (5, "level 1 tech support", 25000.00, 3),
    (6, "escalation assist", 40000.00, 3),
    (7, "software engineer", 80000.00, 4),
    (8, "quality assurance", 80000.00, 4),
    (9, "product manager", 70000.00, 5),
    (10, "product owner", 70000.00, 5);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
    (1, "Tymon", "Cynbel", 1, 1),
    (2, "Rose", "Aveniru", 2, 1),
    (3, "Logan", "Helle", 3, 4),
    (4, "Jezabel", "Elov", 4, 4),
    (5, "Clint", "Cameron", 5, 6),
    (6, "Vishal", "Victoria", 6, 6),
    (7, "Joss", "Grigor", 7, 8),
    (8, "Sarah", "Sebastiana", 8, 8),
    (9, "Regina", "Neelima", 9, 9),
    (10, "Josseline", "Pavlo", 10, 9);