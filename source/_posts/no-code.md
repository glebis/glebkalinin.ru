title: "No-Code: разработка IT-продуктов «без разработки»"
tags:
 - no-code
 - интернет
 - сервисы
 - автоматизация бизнеса
date: 2020-08-03 14:11:54
---
Подход No-code, насколько я&nbsp;его успел понять, состоит в&nbsp;том, что множество готовых технологий и&nbsp;сервисов, которые наконец-то, используя другие специальные инструменты и&nbsp;сервисы ([No-Code Development Platoform](https://en.wikipedia.org/wiki/No-code_development_platform) или [Low-Code Development Platform](https://en.wikipedia.org/wiki/Low-code_development_platform) ), можно относительно легко, без привлечения разработчика, связать друг с&nbsp;другом и&nbsp;научить работать как единое целое.

Я&nbsp;видел прекрасные реализации No-Code подхода со&nbsp;стороны пользователя &mdash; например, в&nbsp;сообществе [Buddhist Geeks](https://www.buddhistgeeks.org/) огромное количество разных процессов (уведомления, сообщество, приглашения на&nbsp;события, организация и&nbsp;проведение событий, добровольные взносы и&nbsp;др.) реализованы через несколько сервисов: Zoom, рассылки, календари, сервисы для сбора donation (процесс напоминания о&nbsp;котором тоже автоматизирован, конечно&nbsp;же), Mighty Networks, наверняка что-то еще. Для меня как для пользователя всё работает бессшовно и&nbsp;прозрачно. Все бизнес-процессы автоматизированы, для этого используется множество готовых технологий.

А&nbsp;видел я&nbsp;и&nbsp;ужасные реализации &mdash; например, соцсеть, ориентированную на&nbsp;профессионалов, которая не&nbsp;работает с&nbsp;компьютера, только в&nbsp;браузере мобильного устройства (хотя десктопный трафик у&nbsp;профессиональных сервисов вполне может превосходить мобильный). И&nbsp;скорее всего создатели соцсети ничего с&nbsp;этим не&nbsp;могут поделать &mdash; таково было архитектурное решение, принятое продуктовой командой, разработавшей сервис.

Я&nbsp;сам давно пользуюсь всевозможными сервисами автоматизации вроде [IFTTT](/ifttt/) (про который писал впервые в&nbsp;2011), ботами в&nbsp;мессенджерах, Automator на&nbsp;компьютере и&nbsp;шорткатами в&nbsp;телефоне. Сейчас пару дней играю&nbsp;с [n8n](https://n8n.io/) &mdash; одним из&nbsp;самых продвинутых по&nbsp;функциональности сервисов для построения No-code продуктов с&nbsp;открытым кодом. Это конкурент Zapier и&nbsp;IFTTT, который ты&nbsp;хостишь самостоятельно. Он&nbsp;поддерживает десятки сервисов, webhooks и&nbsp;так далее.

Что я&nbsp;могу сказать про такой no-code? Отсутствие кода &mdash; это условность. Вместо кода вы&nbsp;используете элементы, которые можете настраивать, устанавливать условия их&nbsp;работы и&nbsp;логические взаимоотношения между ними. Отладка этой логики ничем не&nbsp;отличается от&nbsp;разработки. Я&nbsp;значительную часть времени читал документацию по&nbsp;API продуктов и&nbsp;получал к&nbsp;ним доступы, настраивал Docker и&nbsp;устанавливал пакеты, пытался получить сертификат для локального сервера, настраивал прокси и&nbsp;раутинг... 

Если это не&nbsp;разработка, то&nbsp;это точно что-то очень недалеко от&nbsp;неё ушедшее: я&nbsp;много гуглил всевозможные ошибки и&nbsp;попадал в&nbsp;issues в&nbsp;Гитхабе или на&nbsp;StackExchange &mdash; всё то&nbsp;же самое, что и&nbsp;при написании кода. Так что отсутствие возможности просто взять и&nbsp;быстро поправить код руками, наоборот, начинала подбешивать. (Справедливости ради, можно настройки копировать как текст &mdash; это длинный и&nbsp;нудный json, который не&nbsp;очень весело редактировать руками, но&nbsp;можно, если очень захочется.) Думаю, над большими и&nbsp;сложными проектами через такой GUI работать значительно менее удобно, чем в&nbsp;текстовом редакторе.

No-code технологий сейчас стало так много, они такие разные и&nbsp;так по-разному изменяются со&nbsp;временем, что быть в&nbsp;курсе всего этого стека, проблемных мест и&nbsp;принципов качественной интеграции &mdash; это уже вполне тянет на&nbsp;серьезную профессию. Верю, что возможность через no-code представить за&nbsp;кратчайшие сроки очень рабочее приложение, и&nbsp;не&nbsp;MVP, в&nbsp;котором будет отсутствовать&nbsp;90% ожидаемых в&nbsp;подобном продукте функций &mdash; это огромное преимущество для бизнеса. Но&nbsp;пока что это правда довольно сложно даже для людей с&nbsp;техническим бэкграундом. Сейчас сложно представить, что простой, скажем, дизайнер, без пары лет опыта во&nbsp;фронтэнд-разработке, может сесть и&nbsp;за&nbsp;пару вечеров собрать что-то сложнее телеграм-бота, умеющего отправлять стикер.

Лего, из&nbsp;которого можно строить современные no-code приложение, крайне разнообразно. Тут и&nbsp;машинное обучение через сервисы вроде Google Vision API или Amazon Rekognition, и&nbsp;великолепные инструменты построения гибких реляционных баз данных Airtable, где за&nbsp;час можно построить оптимальную для вас CRM, или CMS, или Kanban-доску, которая сразу&nbsp;же будет работать в&nbsp;продакшне для всей вашей команды, а&nbsp;структуру можно трансформировать налету, и&nbsp;стриминговые сервисы, и &mdash; скоро &mdash; какой-нибудь GPT-3 (хайп вокруг которого, кажется, все-таки преувеличен &mdash; это всего лишь модель, то, что она выдает точные ответы на&nbsp;вопросы, не&nbsp;говорит о&nbsp;том, что оно угрожает рабочим местам разработчиков).

А&nbsp;еще не&nbsp;покидают воспоминания о&nbsp;легендарном [выступлении Брата Виктора The Future of&nbsp;Programming](https://vimeo.com/71278954) ([слайды](http://worrydream.com/dbx/)), где он&nbsp;говорит из&nbsp;прошлого о&nbsp;ненаступившем настоящем, в&nbsp;котором мы&nbsp;применяем прямую манипуляцию данными, компьютеры программируют не&nbsp;процедурами, а&nbsp;целям и&nbsp;ограничениями, где нет никаких API, а&nbsp;системы сами обучаются взаимодействию друг с&nbsp;другом. Пересматриваю это выступление и&nbsp;понимаю, на&nbsp;каком раннем этапе всё ещё находится наше технологическое взросление.

(А&nbsp;ещё хочется покряхтеть, что No-code &mdash; это как веб два ноль &mdash; ничего нового, скорее маркетинговый термин. Zapier и&nbsp;IFTTT существуют по&nbsp;10&nbsp;лет, язык визуального программирования для детей Scratch появился в&nbsp;2007, многие технологии, которые сейчас называют No-Code, далеко не&nbsp;новые. Сейчас скорее появилось критическое количество бизнесов, реализующих подход, люди про них узнают и&nbsp;начинают использовать, и&nbsp;поэтому понадобился новый термин, который обозначает тренд массового применения этих технологий.)