# GetItDone

 
## Authors

Mattias Tüksammel

Martin Pedak

## Wireframe/prototype

[Figma](https://www.figma.com/file/sTgWFcjHwkkxlbIyMssjAc/GetItDone?node-id=0%3A1) 

## Idea 

GetItDone on TODO/checklisti app, fookusega reisimisele -  nimekiri asjadest, mis tuleb enne ära teha kui reisida / hotellist lahkuda / kolida vms (näiteks keera vesi torudes kinni / tagasta rendiauto / ära hambaharja maha jäta). Lahendust saab kasutada üksikisikuliselt või grupina. Võimalik on luua uusi evente/TODOsid, lisada nende alla alamülesanded, mis on vaja lahendada enne eventi lõpetatuks lugemist. Samuti on võimalik alamülesannetele lisada pilte ja juhtnööre nende ülesannete täitmiseks. Grupina on võimalik ülesandeid jagada ja laivis jälgida, kes millega tegeleb ja millal see tegevus eeldatavalt valmis saab. Lahendus peaks olema kasutatav nii arvutis kui mobiilis. 


## Functionality

### Enne sisse logimist

* Kasutaja saab registreerida
* Kasutaja saab sisse logida

### Sisse logitud kasutaja

* Kasutaja näeb loetelu *event-idest* millega to seotud on
* Kasutaja saab välja logida
* Kasutaja saab haldada Kasutaja seadmeid
* Kasutaja saab haldada Event-e ja neis olevaid Task-e
#### Event
* Event-i omadused on nimi, pilt, liikmed, Task-id
* Kasutaja saab event-e teha/muuta/kustutatda
* Event-is on liikmed keda saab lisada/eemaldada
* Event sisaldab Task-e 
#### Task
* Taski omadused on nimi, läbiviijad, deadline
* Task-e saab lisada/muuta/kustutada
* Task-ile saab määrata Event-is olevatest kasutajatest Task-i läbiviijad
## Stack

ReactJS 

ExpressJS 

PostgreSQL 


