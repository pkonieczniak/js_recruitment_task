import { Element } from '../common';

export const ReadLaterListItem = ({ id, title, url }) => {
    return Element('li', {
        children: [
            Element('h4', {
                options: {
                    className: 'readLaterItem-title',
                    innerText: title,
                },
            }),
            Element('section', {
                children: [
                    Element('a', {
                        options: {
                            href: url,
                            className: 'button button-clear',
                            innerText: 'Read',
                            target: '_blank',
                        },
                    }),
                    Element('button', {
                        options: { className: 'button button-clear', innerText: 'Remove' },
                    }),
                ],
            }),
        ],
    });
};

{
    /* <ul class="readLaterList">
  <li>
    <h4 class="readLaterItem-title">Saved news title</h4>
    <section>
      <a href="https://theguardian.com" class="button button-clear">
        Read
      </a>
      <button class="button button-clear">Remove</button>
    </section>
  </li>
</ul>; */
}
