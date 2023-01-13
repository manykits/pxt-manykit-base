manykit.base.schedule(
    () => {
        basic.showNumber(1)
    }, manykit.base.Thread.Priority,
    manykit.base.Mode.Repeat,
    5000
);

manykit.base.schedule(
    () => {
        basic.showNumber(2)
    },
    manykit.base.Thread.Priority,
    manykit.base.Mode.Once,
    1000
);

const cancelId = manykit.base.schedule(
    () => {
        basic.showNumber(3)
    },
    manykit.base.Thread.UserCallback,
    manykit.base.Mode.Repeat,
    10000
);

manykit.base.remove(manykit.base.Thread.UserCallback, cancelId);

