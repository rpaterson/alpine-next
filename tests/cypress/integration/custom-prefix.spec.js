import { haveText, test } from '../utils'

test('can set a custom x- prefix',
    `
        <script>
            document.addEventListener('alpine:initializing', () => {
                Alpine.prefix('data-x-')
            })
        </script>

        <div data-x-data="{ foo: 'bar' }">
            <span data-x-text="foo"></span>
        </div>
    `,
    ({ get }) => get('span').should(haveText('bar'))
)