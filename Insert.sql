INSERT INTO `customer` (`name`, `email`, `status`, `phone`) VALUES ( 'Ana Beatriz', 'anabeatriz@gmail.com', '0', '14991243189');
INSERT INTO `customer` (`name`, `email`, `status`, `phone`) VALUES ('José Almeida', 'jose.almeida@gmail.com', '1', '14991653212');
INSERT INTO `customer` (`name`, `email`, `status`, `phone`) VALUES ('Pedro Miranda', 'pedro@email.com', '1', '14981445454');
INSERT INTO `customer` (`name`, `email`, `status`, `phone`) VALUES ('Maria Luiza', 'magazineluiza@email.com', '1', '14998633366');
INSERT INTO `customer` (`name`, `email`, `status`, `phone`) VALUES ('Laurissa Pereira', 'larissa@gmail.com', '1', '14996416749');

INSERT INTO `formReceipt` (`description`, `status`) VALUES ('Cartão Credito', '1');
INSERT INTO `formReceipt` (`description`, `status`) VALUES ('Cartão Débito', '1');
INSERT INTO `formReceipt` (`description`, `status`) VALUES ('Cheque', '0');
INSERT INTO `formReceipt` (`description`, `status`) VALUES ('Dinheiro', '1');
INSERT INTO `formReceipt` (`description`, `status`) VALUES ('Boleto', '0');

INSERT INTO `service` (`description`, `status`, `value`) VALUES ('Corte de Cabelo', '1', '35.00');
INSERT INTO `service` (`description`, `status`, `value`) VALUES ('Manicure', '1', '20');
INSERT INTO `service` (`description`, `status`, `value`) VALUES ('Pedicure', '1', '20');
INSERT INTO `service` (`description`, `status`, `value`) VALUES ('Limpeza de Pele', '0', '50.00');
INSERT INTO `service` (`description`, `status`, `value`) VALUES ('Design de Sobrancelhas', '0', '20.00');

INSERT INTO `user` (`cpf`, `name`, `email`, `password`, `profile`, `imageProfile`, `phone`, `status`) VALUES ('96643659043', 'Erika Kayoko', 'erika@gmail.com', 'erika123', '1', 'https://scontent.fbau3-1.fna.fbcdn.net/v/t1.0-9/13907171_1772654556353186_4541977171071720314_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=vwlzD7Ph-uQAX-wLaNr&_nc_ht=scontent.fbau3-1.fna&oh=29f3dd90ffbbfab8ed1a9de9934d17b9&oe=5F26CBC8', '14981445500', '1');
INSERT INTO `user` (`cpf`, `name`, `email`, `password`, `profile`, `imageProfile`, `phone`, `status`) VALUES ('34223428004', 'Edson Miguel', 'edson@gmail.com', 'edson123', '1', 'https://scontent.fbau3-1.fna.fbcdn.net/v/t1.0-9/41124582_1900821210226159_7480597208627150848_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=KV0sTrTDHN4AX-4N0fG&_nc_ht=scontent.fbau3-1.fna&oh=8d7de01662b55b10bb4024379e852ac5&oe=5F255723', '14981773170', '1');
INSERT INTO `user` (`cpf`, `name`, `email`, `password`, `profile`, `imageProfile`, `phone`, `status`) VALUES ('55032888079', 'Robson Carmoni', 'robson@email.com', 'rob123', '1', 'https://scontent.fbau3-1.fna.fbcdn.net/v/t1.0-9/70760819_1353710704805852_788371402146185216_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=WOUjbZuCVUAAX9oMiSe&_nc_ht=scontent.fbau3-1.fna&oh=b63379fb8bb01e86c33e49b74f3b35ab&oe=5F24592E', '14981445450', '1');
INSERT INTO `user` (`cpf`, `name`, `email`, `password`, `profile`, `imageProfile`, `phone`, `status`) VALUES ('77221530033', 'Guilherme Teixera', 'guilher@email.com', 'gui123', '1', 'https://scontent.fbau3-1.fna.fbcdn.net/v/t1.0-9/69465169_1402848003196109_2498999967826313216_n.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=0iqXJplN3kMAX8LwbnB&_nc_ht=scontent.fbau3-1.fna&oh=1d369a5793c5e9f864c22d158279bef2&oe=5F24C2B8', '9912236', '0');
INSERT INTO `user` (`cpf`, `name`, `email`, `password`, `profile`, `imageProfile`, `phone`, `status`) VALUES ('31912622610', 'Bruno Dias', 'bruno@email.com', 'bruno123', '1', 'https://scontent.fbau3-1.fna.fbcdn.net/v/t1.0-9/', '14998756425', '1');

INSERT INTO `scheduling` (`date`, `status`, `valueReceive`, `totalReceived`, `valueChange`, `customerId`) VALUES ('2020-06-10 10:00:00', 0, 35, 40, 5, 2); -- José Almeida
INSERT INTO `scheduling` (`date`, `status`, `valueReceive`, `totalReceived`, `valueChange`, `customerId`) VALUES ('2020-06-21 16:00:00', 0, 20, 20, 0, 4); -- Maria Luiza
INSERT INTO `scheduling` (`date`, `status`, `valueReceive`, `totalReceived`, `valueChange`, `customerId`) VALUES ('2020-06-30 15:00:00', 0, 35, 35, 0, 3); -- Pedro Miranda
INSERT INTO `scheduling` (`date`, `status`, `valueReceive`, `totalReceived`, `valueChange`, `customerId`) VALUES ('2020-07-01 15:00:00', 0, 20, 20, 0, 5);-- Larissa Pereira
INSERT INTO `scheduling` (`date`, `status`, `valueReceive`, `totalReceived`, `valueChange`, `customerId`) VALUES ('2020-07-04 08:00:00', 0, 35, 35, 0, 3); -- Pedro Miranda

INSERT INTO `serviceScheduling` (`date`, `serviceId`, `userId`, `schedulingId`) VALUES ('2020-05-30 14:00:00', 1, 2, 1); -- Corte, Edson, José Almeida (2020-06-10)
INSERT INTO `serviceScheduling` (`date`, `serviceId`, `userId`, `schedulingId`) VALUES ('2020-06-05 16:00:00', 2, 1, 2); -- Manicure, Érika, Maria Luiza
INSERT INTO `serviceScheduling` (`date`, `serviceId`, `userId`, `schedulingId`) VALUES ('2020-06-10 10:00:00', 1, 3, 3); -- Corte, Robson, Pedro Miranda (2020-06-30)
INSERT INTO `serviceScheduling` (`date`, `serviceId`, `userId`, `schedulingId`) VALUES ('2020-06-20 09:30:00', 3, 1, 4); -- Pedicure, Érika, Larissa Pereira
INSERT INTO `serviceScheduling` (`date`, `serviceId`, `userId`, `schedulingId`) VALUES ('2020-06-26 15:00:00', 1, 2, 5); -- Corte, Edson, Pedro Miranda (2020-07-10)

INSERT INTO `receivementScheduling` (`date`, `valueReceived`, `formReceiptId`, `userId`, `schedulingId`) VALUES ('2020-06-10 11:00:00', 40, 3, 2, 1); -- Dinheiro, Edson, José Almeida (2020-06-10)
INSERT INTO `receivementScheduling` (`date`, `valueReceived`, `formReceiptId`, `userId`, `schedulingId`) VALUES ('2020-06-21 17:00:00', 20, 1, 1, 2); -- Crédito, Érika, Maria Luiza
INSERT INTO `receivementScheduling` (`date`, `valueReceived`, `formReceiptId`, `userId`, `schedulingId`) VALUES ('2020-06-30 16:00:00', 35, 1, 3, 3); -- Crédito, Robson, Pedro Miranda (2020-06-30)
INSERT INTO `receivementScheduling` (`date`, `valueReceived`, `formReceiptId`, `userId`, `schedulingId`) VALUES ('2020-07-01 16:00:00', 20, 2, 1, 4); -- Débito, Érika, Larissa Pereira
INSERT INTO `receivementScheduling` (`date`, `valueReceived`, `formReceiptId`, `userId`, `schedulingId`) VALUES ('2020-07-04 09:00:00', 35, 3, 2, 5); -- Dinheiro, Edson, Pedro Miranda (2020-07-10)
