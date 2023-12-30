import React, { type ReactElement } from 'react'

export interface PanelDataInterface {
  title: string
  description: string
  children: ReactElement
}

export const PanelData: PanelDataInterface[] = [
  {
    title: 'Футбол/ММА',
    description: 'Криштиану Роналду и Конор Макгрегор смотрят поединок Дмитрия Бивола',
    children: <><p>Звёздный португальский футболист Криштиану Роналду и бывший чемпион UFC в двух весовых категориях ирландский MMA-боец Конор Макгрегор стали гостями боксёрского вечера в Эр-Рияде (Саудовская Аравия).</p>

      <p>Напомним, в настоящий момент чемпион WBA в полутяжёлом весе (до 79,4 кг) и член рейтинга pound-for-pound, россиянин Дмитрий Бивол (21-0, 11 KO) проводит защиту титула против британца Линдона Артура (23-1, 16 KO). Дмитрию Биволу 32 года. В своём последнем бою, состоявшемся в ноябре 2022 года, россиянин победил единогласным судейским решением бывшего чемпиона мира во втором среднем весе (до 76,2 кг) мексиканца Хильберто Рамиреса, нанеся ему первое поражение в карьере.</p>

      <p>Линдону Артуру 32 года. Боец выступает на профессиональном ринге с 2016 года и единственное поражение в карьере потерпел от двукратного претендента на мировые титулы соотечественника Энтони Ярда.</p>

      <p> «Чемпионат» ведёт текстовую онлайн-трансляцию поединка Бивол – Артур.</p>
    </>
  },
  {
    title: 'Волейбол',
    description: 'Казанский «Зенит» в 12‑й раз выиграл Кубок России по волейболу',
    children: <> <p>Казанский «Зенит» стал обладателем БЕТСИТИ Кубка России по волейболу среди мужских команд.</p>

      <p>В финальном матче, который прошел в Москве, «Зенит» одержал победу над московским «Динамо» со счетом 3–1 (28:26, 30:32, 25:17, 25:20).</p>

      <p>«Зенит» в 12‑й раз в истории клуба выиграл Кубок России. Ранее команда побеждала в 2004, 2007, 2009, 2014, 2015, 2016, 2017, 2018, 2019, 2021, 2022 годах.</p>

      <p>Для Алексея Вербова этот трофей стал третьим подряд в Кубке на посту главного тренера казанцев.</p></>
  },
  {
    title: 'Автоспорт',
    description: 'Коронель: Алонсо по-прежнему третий гонщик в Ф-1',
    children: <> <p>Голландский гонщик и эксперт Том Коронель высказался о двукратном чемпионе мира и пилоте «Астон Мартин» испанце Фернандо Алонсо.</p>

      <p>«Астон Мартин» провели замечательный сезон. Глоток свежего воздуха в Формуле-1, парню 42 года, а он даёт уроки молодёжи на стартовой решётке. Фернандо Алонсо это Йоп Зутемелк (голландский велогонщик. – Прим. «Чемпионата») в Формуле-1.</p>

      <p>Опыт в автоспорте – мощное оружие, и я это знаю, мне 51 год, я лысый и седой. Алонсо не должен был подниматься на подиум в этой машине. Но он там оказался! Он по-прежнему третий на стартовой решётке.</p>

      <p>Он по-прежнему целеустремлён и голоден до побед, словно ему 16 лет. Это прекрасно, в свои 42 года он прыгает в объятья механиков, и огонь в нём всё ещё горит», — приводит слова Коронеля издание Formule1.</p></>
  }
]
