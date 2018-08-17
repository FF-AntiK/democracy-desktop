import { withRouter } from 'next/router';
import { Row, Col } from 'antd';

import Link from '../shared/Link';

const Header = ({ router: { pathname } }) => (
  <header>
    <Link as={`/gesetz/234877/Some-Title`} href={`/details?title=testTitle`}>
      TestLink
    </Link>
    <Row>
      <Col span={3}>
        ABC
        {/*<Bubble>DEMOCRACY</Bubble>*/}
      </Col>
      <Col span={6}>
        EFG
        {/*<SearchField>Suche</SearchField>*/}
      </Col>
      <Col span={3}>
        HIJ
        {/*<Filter />
        <Download>App Downloaden</Download>
        <Support>Unterstützen</Support>*/}
      </Col>
    </Row>
    <Row>
      <Col span={3}>
        KLM
        {/*<PeriodSelect>19. Legislaturperiode ('17-'21)</PeriodSelect>*/}
      </Col>
      <Col span={6}>
        NOP
        {/*<ListSelect />*/}
      </Col>
      <Col span={3} />
    </Row>
  </header>
);

export default withRouter(Header);
