import assert from 'node:assert/strict'
import test from 'node:test'
import { messages } from './messages.js'
import { translate } from './translate.js'

test('every source key preserves the original and has both translations', () => {
  for (const [source, entry] of Object.entries(messages)) {
    assert.equal(entry.JP, source)
    assert.ok(entry.KR.trim(), source)
    assert.ok(entry.EN.trim(), source)
    assert.equal(translate(source, 'JP'), source)
    for (const language of ['KR', 'EN']) {
      assert.deepEqual([...entry[language].matchAll(/\{\d+\}/g)].map(([key]) => key).sort(),
        [...source.matchAll(/\{\d+\}/g)].map(([key]) => key).sort())
    }
  }
})

test('dynamic prices, actions, and reservation records use translated wording', () => {
  assert.equal(translate('200,000ウォン', 'KR'), '200,000원')
  assert.equal(translate('1回 100,000ウォン', 'EN'), 'KRW 100,000 per session')
  assert.equal(translate('＋200,000ウォン', 'EN'), '＋KRW 200,000')
  assert.equal(translate('ナチュラルエンボ 追加', 'EN'), 'Add Natural hair-stroke brows')
  assert.equal(translate('選択 2件', 'EN'), 'Selected: 2')
  assert.equal(translate('コンボ ＋ グラデーションリップ', 'KR'), '콤보 ＋ 그라데이션 립')
  assert.equal(translate('200,000ウォン ＋ SMP カウンセリング後決定', 'EN'), 'KRW 200,000 + SMP price after consultation')
})

test('brand names, unknown text, and non-string values are preserved', () => {
  for (const language of ['JP', 'KR', 'EN']) {
    for (const value of ['GYEOLDAM', '결담', 'hanako@example.com', '山田 花子', 0, null, undefined]) {
      assert.equal(translate(value, language), value)
    }
  }
})
