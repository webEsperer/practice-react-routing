# [![](../assets/img/logo-readme2.jpg)](https://devmentor.pl) &nbsp; React: Routing #05

> :loudspeaker: Jeśli chciałbyś więcej tego typu zadań to zapraszam do :moneybag: [wsparcia mojego konta](https://github.com/sponsors/devmentor-pl)!

&nbsp;

Tym razem utworz formularz, który pozwoli filtrować dane w sklepie.

Pozwól użytkownikowi podać np. przedział cenowy oraz szukaną frazę, która ma wystąpić w nazwie lub w opisie.

Zadanie wykonaj w taki sposób, aby dane zapisać w adresie URL i to na podstawie adresu wykonać filtrowanie.

Najlepiej będzie jak każdy z tych elementów umiejscowisz w charakterystycznym dla siebie miejscu np: `/[minPrice],[maxPrice]-[searchTerm]`. Dzięki takiemu rozwiązaniu nie będzie problemu z rozpoznaniem, gdzie znajduje się dana wartość.

&nbsp;

> **Podpowiedź!** Możesz użyć znaku `?`, aby określić, że dany parametr jest opcjonalny (może być pusty) tj. `<Route path={'/:minPrice?,:maxPrice?-:searchTerm?' {/*...*/} />`.

&nbsp;

> :warning: Jeśli nie posiadasz materiałów do tego zadania to znajdziesz je na stronie [devmentor.pl](https://devmentor.pl)
