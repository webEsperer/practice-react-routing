> :star: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s2e08-react-routing` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#04` React: Ścieżkowanie


Znów będziesz wykorzystywać komponent `<Shop>` i dane z pliku `./src/products.json`, tylko tym razem posortujesz listę produktów.

Do widoku dodaj listę rozwijaną, tj. `<select>`. Na podstawie wybranego z listy elementu (filtra) utwórz przekierowanie na odpowiedni adres URL, który będzie decydował o sortowaniu, na przykład:

- po wybraniu `cena malejąco` następuje przekierowanie na adres `/taks04/price-desc` i wyświetlają się produkty od najdroższego do najtańszego
- po wybraniu `cena rosnąco` następuje przekierowanie na adres `/task-4/price-asc` i wyświetlają się produkty od najtańszego do najdroższego.

W podobny sposób możesz sortować po nazwie produktu oraz identyfikatorze.

Tego typu dane specjalnie umieszczamy w adresie URL, aby użytkownik mógł przekazać adres np. znajomemu. Dzięki temu znajomy zobaczy taką samą kolejność elementów na liście produktów.

&nbsp;


> :arrow_left: [*poprzednie zadanie*](./../03) | [*następne zadanie*](./../05) :arrow_right:
