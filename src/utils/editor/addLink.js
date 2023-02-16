/* eslint-disable react-hooks/rules-of-hooks */
import createLinkifyPlugin from '@draft-js-plugins/linkify';
import { useTranslation } from 'react-i18next';
import linkifyIt from 'linkify-it';
import tlds from 'tlds';
import styles from '../../component/tooltip/Tooltip.module.scss';

export const linkifyPlugin = createLinkifyPlugin({
  component(props) {
    const { href } = props;
    const { t } = useTranslation();
    return (
      <div className={styles.linkfy}>
        <div className={styles.tooltip}>
          <span contentEditable="false" onClick={() => window.open(href)}>
            <span contentEditable="false">{t('open')}</span>
          </span>
        </div>
        <a href={href} {...props} className={styles.link} />
      </div>
    );
  },

  customExtractLinks: (text) =>
    linkifyIt()
      .tlds(tlds)
      .set({ fuzzyEmail: false })
      .match(text),
});
