import test from 'node:test';
import assert from 'node:assert/strict';
import { DAUROH_PROGRAMS } from './daurohData.ts';
import { NAV_ITEMS } from '../types/navigation.ts';

test('DAUROH_PROGRAMS contains valid programs with required fields', () => {
  assert.ok(DAUROH_PROGRAMS.length >= 6);
  for (const program of DAUROH_PROGRAMS) {
    assert.ok(program.id);
    assert.ok(program.code.startsWith('D-'));
    assert.ok(program.title.id);
    assert.ok(program.title.en);
    assert.ok(program.price.idr > 0);
    assert.ok(program.price.eur > 0);
    assert.ok(program.remainingSeats > 0);
    assert.ok(program.curriculum.id.length > 0);
    assert.ok(program.dailySchedule.length > 0);
  }
});

test('NAV_ITEMS contains 4 primary routes: Home, Dauroh, Penginapan, Tentang', () => {
  assert.equal(NAV_ITEMS.length, 4);
  const paths = NAV_ITEMS.map((item) => item.path);
  assert.deepEqual(paths, ['/', '/dauroh', '/penginapan', '/tentang']);
  assert.equal(NAV_ITEMS[0].label.id, 'Home');
  assert.equal(NAV_ITEMS[1].label.id, 'Dauroh');
  assert.equal(NAV_ITEMS[2].label.id, 'Penginapan');
  assert.equal(NAV_ITEMS[3].label.id, 'Tentang');
});
