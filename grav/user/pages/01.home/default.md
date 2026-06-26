---
title: 'PanDao Logistics — карго из Китая на Северный Кавказ под ключ'
menu: Главная
cache_enable: false

metadata:
    description: 'PanDao Logistics — доставка грузов из Китая в Грозный, Пятигорск, Махачкалу и Минеральные Воды. Свой склад в Китае, выкуп товара, контейнерные и сборные перевозки от 100 кг. Честный расчёт и ответственность за каждый груз.'
    keywords: 'карго из Китая, доставка из Китая на Северный Кавказ, грузоперевозки Китай Грозный, карго Пятигорск, доставка Махачкала, выкуп товара в Китае, сборные грузы, контейнерные перевозки, склад в Китае'
    robots: 'index, follow'
    'og:type': website
    'og:site_name': 'PanDao Logistics'
    'og:locale': ru_RU
    'og:title': 'PanDao Logistics — карго из Китая на Северный Кавказ'
    'og:description': 'Доставка под ключ из любого города Китая в Грозный, Пятигорск, Махачкалу и Минеральные Воды. Свой склад, выкуп товара, перевозки от 100 кг.'
    'og:url': 'https://pandaologistics.com/'
    'og:image': 'https://pandaologistics.com/user/themes/pandao/images/hero-port.webp'
    'twitter:card': summary_large_image
    'twitter:title': 'PanDao Logistics — карго из Китая на Северный Кавказ'
    'twitter:description': 'Доставка под ключ из Китая на Северный Кавказ. Свой склад, выкуп товара, перевозки от 100 кг.'
    'twitter:image': 'https://pandaologistics.com/user/themes/pandao/images/hero-port.webp'

pandao:
    phone_display: '+7 (985) 071-01-01'
    phone_raw: '+79850710101'
    email: 'pandaologistics@gmail.com'
    whatsapp: '79850710101'
    telegram: 'pandaologistics'
    address: '广东省佛山市里水镇胜利社区河朱沙上庄上进路6号厂房零一零一'
    hours: 'Пн–Сб • 9:00 до 18:00 (МСК)'

form:
    name: lead
    fields:
        -
            name: name
            label: Ваше имя
            type: text
            placeholder: 'Как к вам обращаться'
            validate:
                required: true
        -
            name: phone
            label: Телефон
            type: tel
            placeholder: '+7 (___) ___-__-__'
            validate:
                required: true
        -
            name: consent
            type: checkbox
            label: 'Согласен с обработкой персональных данных согласно 152-ФЗ'
            validate:
                required: true
    buttons:
        -
            type: submit
            value: 'Отправить заявку'
    process:
        -
            email:
                subject: 'Новая заявка с сайта PanDao'
                body: '{% include ''forms/data.html.twig'' %}'
        -
            save:
                fileprefix: lead-
                dateformat: Ymd-His-u
                extension: txt
                body: '{% include ''forms/data.txt.twig'' %}'
        -
            message: 'Спасибо! Логист PanDao свяжется с вами в ближайшее время.'
        -
            reset: true
---
