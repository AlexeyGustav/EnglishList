//дожидаемся полной загрузки страницы
window.onload = function () {

    //получаем идентификатор элемента
    var a = document.getElementById('switch');
    
    //вешаем на него событие
    a.onclick = function() {
        //производим какие-то действия
        if (this.innerHTML=='Separate') this.innerHTML = 'Разделять, Отдельный';
        else this.innerHTML = 'Separate';
        //предотвращаем переход по ссылке href
        return false;
    }

    //получаем идентификатор элемента
    var ziroWord = document.getElementById('link');

    //вешаем на него событие
    ziroWord.onclick = function () {
        //производим какие-то действия
        if (this.innerHTML=='Class') this.innerHTML = 'Класс';
        else this.innerHTML = 'Class';
        //предотвращаем переход по ссылке href
        return false;
    }


    //получаем идентификатор элемента
    var oneWord = document.getElementById('link1');

    //вешаем на него событие
    oneWord.onclick = function () {
        //производим какие-то действия
        if (this.innerHTML == 'Variable') this.innerHTML = 'Переменная';
        else this.innerHTML = 'Variable';
        //предотвращаем переход по ссылке href
        return false;
    }




    //получаем идентификатор элемента
    var twoWord = document.getElementById('link2');

    //вешаем на него событие
    twoWord.onclick = function () {
        //производим какие-то действия
        if (this.innerHTML == 'Example') this.innerHTML = 'Пример';
        else this.innerHTML = 'Example';
        //предотвращаем переход по ссылке href
        return false;
    }




    //получаем идентификатор элемента
    var treeWord = document.getElementById('link3');

    //вешаем на него событие
    treeWord.onclick = function () {
        //производим какие-то действия
        if (this.innerHTML == 'Property') this.innerHTML = 'Свойство';
        else this.innerHTML = 'Property';
        //предотвращаем переход по ссылке href
        return false;
    }




    //получаем идентификатор элемента
    var freeWord = document.getElementById('link4');

    //вешаем на него событие
    freeWord.onclick = function () {
        //производим какие-то действия
        if (this.innerHTML == 'Versatile') this.innerHTML = 'Разносторонний, разнообразный, многофункциональный';
        else this.innerHTML = 'Versatile';
        //предотвращаем переход по ссылке href
        return false;
    }



    //получаем идентификатор элемента
    var fiveWord = document.getElementById('link5');

    //вешаем на него событие
    fiveWord.onclick = function () {
        //производим какие-то действия
        if (this.innerHTML == 'Explanation') this.innerHTML = 'Объяснение, пояснение';
        else this.innerHTML = 'Explanation';
        //предотвращаем переход по ссылке href
        return false;
    }


    //получаем идентификатор элемента
    var sixWord = document.getElementById('link6');

    //вешаем на него событие
    sixWord.onclick = function () {
        //производим какие-то действия
        if (this.innerHTML == 'Experience') this.innerHTML = 'Опыт, стаж';
        else this.innerHTML = 'Experience';
        //предотвращаем переход по ссылке href
        return false;
    }



    //получаем идентификатор элемента
    var sevenWord = document.getElementById('link7');

    //вешаем на него событие
    sevenWord.onclick = function () {
        //производим какие-то действия
        if (this.innerHTML == 'Theme') this.innerHTML = 'Тема';
        else this.innerHTML = 'Theme';
        //предотвращаем переход по ссылке href
        return false;
    }

    //получаем идентификатор элемента
    var eitWord = document.getElementById('link8');

    //вешаем на него событие
    eitWord.onclick = function () {
        //производим какие-то действия
        if (this.innerHTML == 'Maintenance') this.innerHTML = 'Поддержка';
        else this.innerHTML = 'Maintenance';
        //предотвращаем переход по ссылке href
        return false;
    }


    //получаем идентификатор элемента
    var tenWord = document.getElementById('link9');

    //вешаем на него событие
    tenWord.onclick = function () {
        //производим какие-то действия
        if (this.innerHTML == 'Folder') this.innerHTML = 'Папка';
        else this.innerHTML = 'Folder';
        //предотвращаем переход по ссылке href
        return false;
    }




    //получаем идентификатор элемента
    var tenWord = document.getElementById('link10');

    //вешаем на него событие
    tenWord.onclick = function () {
        //производим какие-то действия
        if (this.innerHTML == 'Bundle') this.innerHTML = 'Пакет';
        else this.innerHTML = 'Bundle';
        //предотвращаем переход по ссылке href
        return false;
    }




    //получаем идентификатор элемента
    var elewenWord = document.getElementById('link11');

    //вешаем на него событие
    elewenWord.onclick = function () {
        //производим какие-то действия
        if (this.innerHTML == 'Feature') this.innerHTML = 'Особенность, характеристика, черта';
        else this.innerHTML = 'Feature';
        //предотвращаем переход по ссылке href
        return false;
    }



    //получаем идентификатор элемента
    var twelvWord = document.getElementById('link12');

    //вешаем на него событие
    twelvWord.onclick = function () {
        //производим какие-то действия
        if (this.innerHTML == 'Response') this.innerHTML = 'Ответ, реакция';
        else this.innerHTML = 'Response';
        //предотвращаем переход по ссылке href
        return false;
    }


    //получаем идентификатор элемента
    var inWord = document.getElementById('link13');
    
    //вешаем на него событие
    inWord.onclick = function() {
        //производим какие-то действия
        if (this.innerHTML=='In particular') this.innerHTML = 'В частности';
        else this.innerHTML = 'In particular';
        //предотвращаем переход по ссылке href
        return false;
    }



    //получаем идентификатор элемента
    var chapterWord = document.getElementById('link14');

    //вешаем на него событие
    chapterWord.onclick = function () {
        //производим какие-то действия
        if (this.innerHTML == 'Chapter') this.innerHTML = 'Глава';
        else this.innerHTML = 'Chapter';
        //предотвращаем переход по ссылке href
        return false;
    }

    //получаем идентификатор элемента
    var simpleWord = document.getElementById('link15');

    //вешаем на него событие
    simpleWord.onclick = function () {
        //производим какие-то действия
        if (this.innerHTML == 'Simple') this.innerHTML = 'Простой';
        else this.innerHTML = 'Simple';
        //предотвращаем переход по ссылке href
        return false;
    }


    //получаем идентификатор элемента
    var preciseWord = document.getElementById('link16');

    //вешаем на него событие
    preciseWord.onclick = function () {
        //производим какие-то действия
        if (this.innerHTML == 'Precise') this.innerHTML = 'Точный, четкий';
        else this.innerHTML = 'Precise';
        //предотвращаем переход по ссылке href
        return false;
    }


    //получаем идентификатор элемента
    var currentWord = document.getElementById('link17');

    //вешаем на него событие
    currentWord.onclick = function () {
        //производим какие-то действия
        if (this.innerHTML == 'Current') this.innerHTML = 'Текущий, действующий';
        else this.innerHTML = 'Current';
        //предотвращаем переход по ссылке href
        return false;
    }




    //получаем идентификатор элемента
    var uselessWord = document.getElementById('link18');

    //вешаем на него событие
    uselessWord.onclick = function () {
        //производим какие-то действия
        if (this.innerHTML == 'Useless') this.innerHTML = 'Бесполезный';
        else this.innerHTML = 'Useless';
        //предотвращаем переход по ссылке href
        return false;
    }



    //получаем идентификатор элемента
    var allowWord = document.getElementById('link19');

    //вешаем на него событие
    allowWord.onclick = function () {
        //производим какие-то действия
        if (this.innerHTML == 'Allow') this.innerHTML = 'Разрешать, допускать, позволять';
        else this.innerHTML = 'Allow';
        //предотвращаем переход по ссылке href
        return false;
    }
// Без коментариев
    var fiddleWord = document.getElementById('link20');
    fiddleWord.onclick = function () {
        if (this.innerHTML == 'Fiddle') this.innerHTML = 'Играть, Скрипка';
        else this.innerHTML = 'Fiddle';
        return false;
    }

    var performWord = document.getElementById('link21');
    performWord.onclick = function () {
        if (this.innerHTML == 'Perform') this.innerHTML = 'Выполнять';
        else this.innerHTML = 'Perform';
        return false;
    }

    var explicitlyWord = document.getElementById('link22');
    explicitlyWord.onclick = function () {
        if (this.innerHTML == 'Explicitly') this.innerHTML = 'Явно, однозначно';
        else this.innerHTML = 'Explicitly';
        return false;
    }

    var especiallyWord = document.getElementById('link23');
    especiallyWord.onclick = function () {
        if (this.innerHTML == 'Especially') this.innerHTML = 'Особенно, в особенности';
        else this.innerHTML = 'Especially';
        return false;
    }

    var previousWord = document.getElementById('link24');
    previousWord.onclick = function () {
        if (this.innerHTML == 'Previous') this.innerHTML = 'Предыдущий';
        else this.innerHTML = 'Previous';
        return false;
    }

    var thoroughlyWord = document.getElementById('link25');
    thoroughlyWord.onclick = function () {
        if (this.innerHTML == 'Thoroughly') this.innerHTML = 'Тщательно, детально';
        else this.innerHTML = 'Thoroughly';
        return false;
    }

    var schemeWord = document.getElementById('link26');
    schemeWord.onclick = function () {
        if (this.innerHTML == 'Scheme') this.innerHTML = 'Схема';
        else this.innerHTML = 'Scheme';
        return false;
    }

    var fieldWord = document.getElementById('link27');
    fieldWord.onclick = function () {
        if (this.innerHTML == 'Field') this.innerHTML = 'Поле, область';
        else this.innerHTML = 'Field';
        return false;
    }

    var necessaryWord = document.getElementById('link28');
    necessaryWord.onclick = function () {
        if (this.innerHTML == 'Necessary') this.innerHTML = 'Необходимый';
        else this.innerHTML = 'Necessary';
        return false;
    }

    var thereforeWord = document.getElementById('link29');
    thereforeWord.onclick = function () {
        if (this.innerHTML == 'Therefore') this.innerHTML = 'Поэтому';
        else this.innerHTML = 'Therefore';
        return false;
    }

    var stringWord = document.getElementById('link30');
    stringWord.onclick = function () {
        if (this.innerHTML == 'String') this.innerHTML = 'Строка';
        else this.innerHTML = 'String';
        return false;
    }

    var definitionWord = document.getElementById('link31');
    definitionWord.onclick = function () {
        if (this.innerHTML == 'Definition') this.innerHTML = 'Определение';
        else this.innerHTML = 'Definition';
        return false;
    }

    var implementWord = document.getElementById('link32');
    implementWord.onclick = function () {
        if (this.innerHTML == 'Implement') this.innerHTML = 'Реализация, внедрение';
        else this.innerHTML = 'Implement';
        return false;
    }

    var simplicityWord = document.getElementById('link33');
    simplicityWord.onclick = function () {
        if (this.innerHTML == 'For simplicity') this.innerHTML = 'Для простоты';
        else this.innerHTML = 'For simplicity';
        return false;
    }

    var thusWord = document.getElementById('link34');
    thusWord.onclick = function () {
        if (this.innerHTML == 'Thus') this.innerHTML = 'Таким образом, следовательно';
        else this.innerHTML = 'Thus';
        return false;
    }

    var strictlyWord = document.getElementById('link35');
    strictlyWord.onclick = function () {
        if (this.innerHTML == 'Strictly speaking') this.innerHTML = 'Строго говоря';
        else this.innerHTML = 'Strictly speaking';
        return false;
    }

    var blatantWord = document.getElementById('link36');
    blatantWord.onclick = function () {
        if (this.innerHTML == 'Blatant') this.innerHTML = 'Явный, грубый';
        else this.innerHTML = 'Blatant';
        return false;
    }

    var assignmentWord = document.getElementById('link37');
    assignmentWord.onclick = function () {
        if (this.innerHTML == 'Assignment') this.innerHTML = 'Задание, присвоение';
        else this.innerHTML = 'Assignment';
        return false;
    }

    var defenceWord = document.getElementById('link38');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Defence') this.innerHTML = 'Защита';
        else this.innerHTML = 'Defence';
        return false;
    }    
    var defenceWord = document.getElementById('link39');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Prohibit') this.innerHTML = 'Запрещать, препятствовать';
        else this.innerHTML = 'Prohibit';
        return false;
    }    
    var defenceWord = document.getElementById('link40');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Invocation') this.innerHTML = 'Вызов, Просьба';
        else this.innerHTML = 'Invocation';
        return false;
    }    
    var defenceWord = document.getElementById('link41');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Revert') this.innerHTML = 'Возвращаться';
        else this.innerHTML = 'Revert';
        return false;
    }    
    var defenceWord = document.getElementById('link42');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Credentials') this.innerHTML = 'Учетные данные';
        else this.innerHTML = 'Credentials';
        return false;
    }    
    var defenceWord = document.getElementById('link43');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Apropriate') this.innerHTML = 'Адаптировать, соответствовать';
        else this.innerHTML = 'Apropriate';
        return false;
    }    
    var defenceWord = document.getElementById('link44');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Fortunately') this.innerHTML = 'К счастью';
        else this.innerHTML = 'Fortunately';
        return false;
    }    
    var defenceWord = document.getElementById('link45');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Persistent') this.innerHTML = 'Стойкий, постоянный';
        else this.innerHTML = 'Persistent';
        return false;
    }    
    var defenceWord = document.getElementById('link46');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Constraint') this.innerHTML = 'Ограничение';
        else this.innerHTML = 'Constraint';
        return false;
    }    
    var defenceWord = document.getElementById('link47');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Comprehensive') this.innerHTML = 'Комплексный, Всесторонний';
        else this.innerHTML = 'Comprehensive';
        return false;
    }    
    var defenceWord = document.getElementById('link48');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Stuff') this.innerHTML = 'Вещи, материал';
        else this.innerHTML = 'Stuff';
        return false;
    }  
    var defenceWord = document.getElementById('link49');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Layout') this.innerHTML = 'Макет, разметка';
        else this.innerHTML = 'Layout';
        return false;
    }    
    var defenceWord = document.getElementById('link50');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Guest') this.innerHTML = 'Гость';
        else this.innerHTML = 'Guest';
        return false;
    }    
    var defenceWord = document.getElementById('link51');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Rudimentary') this.innerHTML = 'Элементарный';
        else this.innerHTML = 'Rudimentary';
        return false;
    }    
    var defenceWord = document.getElementById('link52');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Suffice') this.innerHTML = 'Удовлетворять, быть достаточным';
        else this.innerHTML = 'Suffice';
        return false;
    }    
    var defenceWord = document.getElementById('link53');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Anyway') this.innerHTML = 'В любом случае';
        else this.innerHTML = 'Anyway';
        return false;
    }    
    var defenceWord = document.getElementById('link54');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Introduce') this.innerHTML = 'Представлять, вводить';
        else this.innerHTML = 'Introduce';
        return false;
    }    
    var defenceWord = document.getElementById('link55');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Mention') this.innerHTML = 'Упоминание';
        else this.innerHTML = 'Mention';
        return false;
    }    
    var defenceWord = document.getElementById('link56');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Although') this.innerHTML = 'Хотя, хоть';
        else this.innerHTML = 'Although';
        return false;
    }    
    var defenceWord = document.getElementById('link57');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Validation') this.innerHTML = 'Проверка';
        else this.innerHTML = 'Validation';
        return false;
    }    
    var defenceWord = document.getElementById('link58');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Boilerplate') this.innerHTML = 'Шаблон';
        else this.innerHTML = 'Boilerplate';
        return false;
    }  
    // 
    var defenceWord = document.getElementById('link59');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Password') this.innerHTML = 'Пароль';
        else this.innerHTML = 'Password';
        return false;
    }    
    var defenceWord = document.getElementById('link60');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Correspond') this.innerHTML = 'Соответствовать, Переписываться';
        else this.innerHTML = 'Correspond';
        return false;
    }    
    var defenceWord = document.getElementById('link61');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Conclude') this.innerHTML = 'Завершать, заканчиваться';
        else this.innerHTML = 'Conclude';
        return false;
    }    
    var defenceWord = document.getElementById('link62');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Closure') this.innerHTML = 'Закрытие';
        else this.innerHTML = 'Closure';
        return false;
    }    
    var defenceWord = document.getElementById('link63');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Cumbersome') this.innerHTML = 'Тяжелый, громоздкий';
        else this.innerHTML = 'Cumbersome';
        return false;
    }    
    var defenceWord = document.getElementById('link64');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Briefly') this.innerHTML = 'Кратко, вкратце';
        else this.innerHTML = 'Briefly';
        return false;
    }    
    var defenceWord = document.getElementById('link65');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Probably') this.innerHTML = 'Возможно, наверное';
        else this.innerHTML = 'Probably';
        return false;
    }    
    var defenceWord = document.getElementById('link66');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Forbid') this.innerHTML = 'Запрещать';
        else this.innerHTML = 'Forbid';
        return false;
    }    
    var defenceWord = document.getElementById('link67');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Template') this.innerHTML = 'Шаблон';
        else this.innerHTML = 'Template';
        return false;
    }    
    var defenceWord = document.getElementById('link68');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Encapsulation') this.innerHTML = 'Инкапсуляция';
        else this.innerHTML = 'Encapsulation';
        return false;
    }  

    var defenceWord = document.getElementById('link69');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Inheritancе') this.innerHTML = 'Наследование, наследство';
        else this.innerHTML = 'Inheritancе';
        return false;
    }  

    var defenceWord = document.getElementById('link70');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Polymorphism') this.innerHTML = 'Полиморфизм';
        else this.innerHTML = 'Polymorphism';
        return false;
    }  

    var defenceWord = document.getElementById('link71');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Reference') this.innerHTML = 'Ссылка, справка';
        else this.innerHTML = 'Reference';
        return false;
    }  

    var defenceWord = document.getElementById('link72');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Exception') this.innerHTML = 'Исключение';
        else this.innerHTML = 'Exception';
        return false;
    }  

    var defenceWord = document.getElementById('link73');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Namespace') this.innerHTML = 'именное пространство';
        else this.innerHTML = 'Namespace';
        return false;
    }  

    var defenceWord = document.getElementById('link74');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Performance') this.innerHTML = 'Представление';
        else this.innerHTML = 'Performance';
        return false;
    }  

    var defenceWord = document.getElementById('link75');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Predefine') this.innerHTML = 'Предопределенный';
        else this.innerHTML = 'Predefine';
        return false;
    }  

    var defenceWord = document.getElementById('link76');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Selection') this.innerHTML = 'Выбор';
        else this.innerHTML = 'Selection';
        return false;
    }  

    var defenceWord = document.getElementById('link77');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Requirement') this.innerHTML = 'Требование';
        else this.innerHTML = 'Requirement';
        return false;
    }  

    var defenceWord = document.getElementById('link78');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Request') this.innerHTML = 'Запрос';
        else this.innerHTML = 'Request';
        return false;
    }  


// 

    var defenceWord = document.getElementById('link79');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Sign up') this.innerHTML = 'Зарегестрироваться';
        else this.innerHTML = 'Sign up';
        return false;
    }  

    var defenceWord = document.getElementById('link80');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Overloading') this.innerHTML = 'Перезагрузка';
        else this.innerHTML = 'Overloading';
        return false;
    }  

    var defenceWord = document.getElementById('link81');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Loop') this.innerHTML = 'Цикл';
        else this.innerHTML = 'Loop';
        return false;
    }  

    var defenceWord = document.getElementById('link82');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Function') this.innerHTML = 'Функция';
        else this.innerHTML = 'Function';
        return false;
    }  

    var defenceWord = document.getElementById('link83');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Newbie') this.innerHTML = 'Новичок';
        else this.innerHTML = 'Newbie';
        return false;
    }  

    var defenceWord = document.getElementById('link84');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Bugbear') this.innerHTML = 'Проблема';
        else this.innerHTML = 'Bugbear';
        return false;
    }  

    var defenceWord = document.getElementById('link85');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Network') this.innerHTML = 'Сеть';
        else this.innerHTML = 'Network';
        return false;
    }  

    var defenceWord = document.getElementById('link86');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Execute') this.innerHTML = 'Выполнять, запускать';
        else this.innerHTML = 'Execute';
        return false;
    }  

    var defenceWord = document.getElementById('link87');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Benefit') this.innerHTML = 'Выгода, польза';
        else this.innerHTML = 'Benefit';
        return false;
    }  

    var defenceWord = document.getElementById('link88');
    defenceWord.onclick = function () {
        if (this.innerHTML == 'Purpose') this.innerHTML = 'Цель';
        else this.innerHTML = 'Purpose';
        return false;
    }  
}






