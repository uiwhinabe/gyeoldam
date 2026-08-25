const formatWon = (amount) => `${amount.toLocaleString('ja-JP')}ウォン`

function ReservationList({ items, onRemove, onDirectorChange, onAddAnother }) {
  return (
    <section className="reservation-list-panel" aria-labelledby="reservation-list-title">
      <div className="reservation-list-panel__heading">
        <p>SELECTED TREATMENTS</p>
        <h2 id="reservation-list-title">予約リスト</h2>
      </div>

      {items.length === 0 ? (
        <div className="reservation-list-panel__empty">
          <p>選択された施術はありません。</p>
          <button type="button" onClick={onAddAnother}>施術を選択する</button>
        </div>
      ) : (
        <div className="reservation-list-panel__items">
          {items.map((item) => (
            <article key={item.id} className="reservation-list-card">
              <div className="reservation-list-card__top">
                <h3>{item.name}</h3>
                <button type="button" aria-label={`${item.name}を削除`} onClick={() => onRemove(item.id)}>削除</button>
              </div>
              <dl>
                <div><dt>基本料金</dt><dd>{formatWon(item.price)}</dd></div>
                <div>
                  <dt><label htmlFor={`director-${item.id}`}>院長指名</label></dt>
                  <dd>
                    <select
                      id={`director-${item.id}`}
                      value={item.directorSelected ? 'director' : 'none'}
                      onChange={(event) => onDirectorChange(item.id, event.target.value === 'director')}
                    >
                      <option value="none">指名なし</option>
                      <option value="director">院長を指名</option>
                    </select>
                  </dd>
                </div>
                <div><dt>指名追加料金</dt><dd>{formatWon(item.additionalFee)}</dd></div>
                <div className="reservation-list-card__total"><dt>合計</dt><dd>{formatWon(item.finalAmount)}</dd></div>
              </dl>
            </article>
          ))}
          <button className="reservation-list-panel__add" type="button" onClick={onAddAnother}>＋ 他の施術を追加</button>
        </div>
      )}
    </section>
  )
}

export default ReservationList
