function organizingContainers(container) {
  let result = true;

  let { row, col } = container.reduce(
    (target, items, index) => {
      items.reduce((itemTarget, item, subIndex) => {
        target["row"][index] += item;
        target["col"][subIndex] += item;

        return itemTarget;
      }, []);

      return target;
    },
    {
      row: new Array(container.length).fill(0),
      col: new Array(container.length).fill(0)
    }
  );

  row.sort();
  col.sort();

  for (let value of Array.from(
    { length: container.length },
    (value, index) => index
  )) {
    if (row[value] !== col[value]) {
      result = false;
      break;
    }
  }

  return result ? "Possible" : "Impossible";
}