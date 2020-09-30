import React, { useEffect } from "react";
import Taro from "@tarojs/taro";

import { View } from "@tarojs/components";
import "./index.scss";
import "@tarojs/taro/html.css";

function Policy() {
  const nodes = ` <div>
  <h2>“红砖拍牌”网用户注册服务协议 </h2>
  <h5>（第一版）</h5>
  <p class="boldss">正文：</p>
  <p>请用户在注册时务必认真阅读并审慎审阅《红砖拍牌网用户注册服务协议》（以下简称“本协议”）约定的内容，本协议根据《中华人民共合同合同法》等法律法规起草，自用户同意注册之日起具有合同法律效力。 </p>
      红砖拍牌网（以下简称“本网站”）依据《红砖拍牌网用户注册服务协议》（以下简称“本协议”）的规定提供服务。
  </p>
  <p class="boldss">总则：</p>
  <p class="bolds" style="padding-left: 10px">在您注册成为本网站用户之前，请认真充分阅读并理解本协议全部内容，请您在完全同意本协议的情况下注册成为本网站用户，当您成功注册本网站后，即表示您已充分阅读、理解并同意自己与本网站订立本协议、自愿受本协议的各项条款约束。您的使用行为亦视为您对本协议的接受、成为本网站的用户、同意受本协议各项条款约束。 </p>
      为了便于更好的提供网站服务，注册用户同意本网站有权随时变更本协议内容并在本网站上予以公告，此类变更一经公布立即自动生效。如您对变更内容存在疑问或不同意变更，必须立即停止使用本网站。 </p>
      本协议内容包括本文件的所有内容及所有红砖拍牌网已经发布的全部规则，包括但不限于《雇主用户使用规则》、《拍手用户使用规则》等。所有规则为本协议的附件，为本协议不可分割的一部分，与本协议正文具有同等法律效力，若规则与本文件发生冲突的，以发布在后者为准。本协议修改后，若您继续使用本网站，则表示您已接受并自愿遵守变更后的协议内容。
  </p>
  <p class="boldss">条款：</p>
  <p class="bolds">
      第一条 定义
  </p>
  <p>
      <p>本协议中所使用的下列名词，除非另有约定，应按以下定义理解 </p>
      <p>1、“本网站”，是指红砖拍牌网（PC网址：www.hongzhuanpaipai.com;手机网址：m.hongzhuanpaipai.com;及红砖拍牌微信客户端等产品）</p>
      <p>2、“本协议”，是指本文书和其附件（包括但不限于本网站各项规则，如 <a id="protocol_employer" href="/protocol/employer">《雇主用户使用规则》</a>、<a id="protocol_shop" href="/protocol/shop">《拍手用户使用规则》</a>等）组成的一整套协议。</p>
      <p>3、注册用户、用户、您：是指符合本协议的规定条件，并同意遵守本协议及其附件（包括但不限于本网站各项规则），并注册成为本网站用户的人或机构或团体等，包括雇主和拍手等。 </p>
      <p>4、“雇主”，是指在本网站发布需求、任务、招标的用户，且具有投标上海车牌的资格、支付款项的能力。 </p>
      <p>5、“拍手”，是指在本网站参加竞标、代为拍牌的用户，且具有相关拍牌经验、能够履行代为拍牌的能力。 </p>
      <p>6、“中标”，是指根据发布任务或标书的要求，拍手参与协商或竞标后，获得雇主同意、履行代为拍牌义务、获得相应收益的行为结果。</p>
  </p>
  <p class="bolds">第二条 用户资格</p>
  <p>
  <p>1、申请成为注册用户，需要满足以下条件之一，方可使用本网站的服务： </p>
  <p>（1）完全民事行为能力的自然人； </p>
  <p>（2）无民事行为能力人或限制民事行为能力人应取得其监护人的同意； </p>
  <p>（3）根据我国相关法律法规等成立并合法存续的机构或团体或法人； </p>
  <p>（4）由多位完全民事行为能力人组成的团队。 </p>
  <p>2、用户注册时，需提供正确的联系地址、联系电话，发布任务或标书的，另需提供真实姓名、名称、身份证信息等，应网站要求上传上海车牌拍卖标书、支付相关费用等。 </p>
  <p>3、 账号使用 </p>
  <p>（一）账号注册：  </p>
  <p>（1）用户应当严格按照红砖拍牌网的注册流程、注册协议的约定完成账号注册。 </p>
  <p>（2）用户不得以虚假信息进行账号注册。 </p>
  <p>（3）用户不得冒用第三方注册账号。 </p>
  <p>（4）用户不得违法法律法规等对账户名称、头像、简介等信息的强制性规定，不得违反公序良俗。 </p>
  <p>（二）、账号安全 </p>
  <p>（1）用户须自行负责账号和密码的安全，且须对在该账号下的所有行为（包括但不限于发布需求信息、网上点击同意各类协议、规则、参与需求投标、论坛发帖等）承担责任。 </p>
  <p>（2）用户有权根据需要更改账号密码。 </p>
  <p>（3）因用户的过错或其他非归于红砖拍牌网的原因所进行的行为导致的任何损失由用户自行承担，该行为包括但不限于：不按照交易提示操作、未及时进行交易操作、遗忘或泄漏密码、密码被他人破解、用户使用的计算机被他人侵入、其他应当归属于用户的责任。 </p>
  <p>（4）红砖拍牌网用户名对应的是一个用户的个人账号，同时还和用户的实际身份、用户个人信用，以及交易记录相关联，不得随意改动。 </p>
  <p>（5）红砖拍牌网账号不能被注销，但可申请冻结。 </p>
  <p>（三）、账号归属 </p>
  <p>（1）针对连续120天未登录红砖拍牌网的账号及用户名、违反注册协议约定等，红砖拍牌网有权未经通知回收账号： </p>
  <p>（2）用户不得以任何形式转让或授权第三人使用自己在本网站的用户账号（账号实名认证通过后将无法做任何变更）。 </p>
  <p>（3）用户账号固定绑定用户提交的认证信息，若出现因账号所属人不明而产生的纠纷，发生纠纷的双方应自行解决，纠纷未决期间本网站有权冻结账号及其内款项。若协商不成，可向红砖拍牌网发起申述维权申请，但红砖拍牌网有权仅以注册用户账户时认证的信息以及处理申述维权时网站要求提交的相关证据资料为依据进行认定。若申述维权的最终处理结果涉及账号被冻结，由此导致的任何损失及责任由发生纠纷的双方共同承担，与本网站无涉。对申述维权结果不符的，纠纷任何一方均可向上海市嘉定区人民法院诉讼解决。若被锁定账号中尚有金钱余额，本网站有权将此款项将退至账号绑定的银行账户。
  </p>
  <p class="bolds">第三条 用户的权利和义务</p>
  <p>
  <p>1、注册用户根据本协议及其附件的规定，雇主有权发布需求信息、发布任务、发布标书、查询拍手信息等，拍手有权查看需求、任务、标书、参与竞标、与雇主协商等。 </p>
  <p>2、注册用户应当对自己的用户账号和密码负责，对在用户账号和密码验证相符的情况下发生的所有行为（包括但不限于发布信息、点击同意操作、参与招投标等各位网站项目、活动、操作等）承担全部法律责任。 </p>
  <p>用户有权根据需要变更账户、密码等信息。因用户的原因导致的任何损失由其自行承担（包括但不限于：不按照网站规则或指示操作、未及时进行交易确认或操作、遗忘或泄漏密码、密码被他人破解、用户使用的计算机等设备被他人侵入、其他应当归责于用户的原因）。 </p>
  <p>3、为了保障本网站可以及时联系到用户，注册用户应当向本网站提供确实准确的注册信息，包括但不限于真实姓名、身份证号、联系电话、地址、电子邮箱等信息，根据后续需要提供银行账户等信息。 </p>
  <p>4、用户在本网站注册的账号名称，不得违法国家强制性规定，不得违法公序良俗，不得冒用或关联他人名义；用户注册信息不具有财产性权利，未经本网站同意，用户不得转让或授权他人使用自己的用户帐号。 </p>
  <p>5、用户应当保证在网站发布的需求、任务、标书、提供的文件（如上海市车牌招投标相应文书）、其他信息的真实性和有效性。 </p>
  <p>6、用户在本网站的全部活动，不得违反国家法律、法规、行政规章的规定，不得侵犯他人知识产权，不得侵犯其他合法权益的信息，不得违反本协议及其附件的规定。如有违反，由其自行承担全部法律责任。 </p>
  <p>7、用户不得采取不正当手段（包括但不限于虚假交易、后期要求雇主修改差评等方式）提高自身或他人的好评度等指数，或采用不正当手段恶意评价其他用户，降低其好评度等指数。 </p>
  <p>8、用户在本网站网上交易过程中如与其他用户因交易产生纠纷，可以请求本网站从中予以协调处理，网站的协调意见不作为法律定案依据。需要本网站代发律师函的，费用由该用户自行承担（每次发函律师费500元）。 </p>
  <p>9、用户之间、用户与第三人之间发生的相关费用，除本网站另有规定外，由用户自行承担并依法纳税。用户在交易完成后12小时内未书面提出的，视为授权本网站代扣代缴相关税费。 </p>
  <p>10、用户同意并确认，在本网上发布的所有信息，知识产权均归属于本网站，且未经本网站书面允许，用户不得将本网站的任何资料作商业利用（包括但不限于以复制、修改、翻译等形式制作衍生作品、分发或公开展示）。 </p>
  <p>11、用户同意接收来自本网站的信息，包括但不限于网页信息、平台服务信息、交易推荐信息等，发送方式包括短信、微信公众号、电子邮件等。
  </p>
  <p class="bolds">第四条 本网站的权利和义务</p>
  <p>
  <p>1、本网站仅为用户提供一个信息交流平台，是雇主发布需求和拍手提供代拍牌服务的交易平台，本网站对交易双方均不加以监视或控制、对真实性不做认证、不主动介入交易的过程，非交易的任何一方，但为了保证交易安全，有权根据本协议及其附件的约定，主动代为管理款项、代为付款、履行罚款权利等。 </p>
  <p>2、本网站有义务对用户在使用本网站功能遇到相关问题时，提供相应指导和支持。 </p>
  <p>3、本网站有权对用户提交的任意资料进行审查，对存在任何问题或怀疑的资料，本网站有权发出通知要求用户做出解释或改正，并暂停用户使用本网站功能的权利。 </p>
  <p>4、用户因在本网站网上交易与其他用户产生纠纷的，本网站推荐以协商为主，用户可委托本网站担任斡旋，委托本网站代发律师函。 </p>
  <p>5、用户认可因网络信息平台的特殊性，认可本网站不承担对所有用户的交易行为以及与交易有关的其他事项进行事先审查的义务、对用户的履行能力不承担任何事先审查义务，不承担任何保证责任。 </p>
  <p>如发生以下情形之一的，本网站有权无需征得用户的同意，自行立即限制该用户的活动、终止或中止交易等： </p>
  <p>（1）、该用户丧失了本协议第二条约定的用户资格 </p>
  <p>（2）、该用户侵犯了其他用户或第三方的权益、或存在其他违法或不当行为（本网站以普通非专业人员的知识水平标准对相关内容进行判断） </p>
  <p>（3）、该用户违反了本协议及其附件的规定。 </p>
  <p>6、用户违法本条第5款约定的，本网站有权在网站上公告其违约或违法行为，并有权暂停或终止对其进行服务，有权删除相关信息。 </p>
  <p>7、用户存放在本网站账户内的款项的所有权归用户所有，款项产生的利息作为款项保管费用归于本网站，返还或代付时不计利息只支付本金。本网站依据本协议及其附件的规定，有权自行冻结、使用、先行赔付、退款、处置用户交付并冻结在本网站账户内的资金。因违约而被冻结在用户账户的资金，在按照相关规定进行处置后尚有余额的，该用户可申请提现。 </p>
  <p>8、本网站有权根据非专业人士的知识水平判断用户具有以下情形时，有权在不通知按用户的前提下，删除交易信息或采取其他限制性维护网站权益： </p>
  <p>（1）规避费用为目的；（2）以炒作好评为目的；（3）存在欺诈等恶意或虚假内容；（4）存在恶意竞价或其他试图扰乱正常交易秩序因素；（4）违反法律法规等强制性规定；（5）违反本协议及其附件的规定；（6）其他损害本网站或其他用户或第三人的行为。
  </p>
  <p class="bolds">第五条 服务的中断和终止</p>
  <p>
  <p>1、为了更好的服务用户、节约网站资源、维护本网站合法权益，用户认可本网站的特殊性，同意本网站有权以任何理由在未经通知用户的情况下，可自行全权决定随时停止提供全部或部分服务。服务终止后，本网站没有义务为用户保留原账户中或与之相关的任何信息。 </p>
  <p>2、用户申请终止本网站服务的，应当需经本网站审核同意，本网站有权保留用户存在违约的追诉权、对用户资料交易记录等的知识产权。</p>
  <p class="bolds">第六条 中标后，所得款项的分配</p>
  <p>1、雇主任务款分配规则 </p>
  <p class="bolds" style="padding-left: 10px">雇主发布（悬赏）任务、需求、招标中，应当在任务完成后的72小时内，给予完成任务事项的拍手任务服务费（款项金额由雇主发布、或雇主与拍手协商确定、或拍手招标等方式确定），中标并完成任务的拍手获得服务费；如交易未达成或完成的，收款方应当按照本协议规定在72小时内履行付款义务。 </p>
      无论中标与否，拍手均应当承担平台运营费，拍手同意按<a id="protocol_shop2" href="/protocol/shop">《拍手用户使用规则》</a>执行。</p>
  <p>2、若雇主怠于履行付款义务超过24小时的，本网站有权主动聘请律师发律师函给雇主进行催款，该律师费用（单次发函计费500元）由拍手承担，并在拍手应得的任务款中扣除。 </p>
  <p>3、关于发票：</p>
      雇主因任务支付的任何款项，均不包括税费部分；雇主支付款项需要开具发票的，应当在任务中注明、或任务协商时向拍手提出并协商一致；任务完成后雇主要求开具发票的，应当对税额款项进行补足，并提供相应开票信息。在雇主补足税额款项后，本网站仅就收取到的相应运营费用承担开具发票的义务，其余开票义务由拍手承担。
  </p>
  <p class="bolds">第七条 本网站的责任范围</p>
  <p>用户接受本协议并注册成为本网站用户时，用户应当明确了解并同意： </p>
  <p>1、作为一个低成本运营下的网站，本网站无法随时预见到任何技术上的问题或其他困难，无法抵抗黑客、病毒等的破坏，此类问题/困难/破坏可能会导致数据损失等不可逆损失、或其他服务中断，本网站无法保证不受干扰、能够及时提供、安全可靠或免于出错。 </p>
  <p>2、从本网站取得的任何信息、资料、下载等，由用户自行审核、考量，并且承担全部风险。下载任何资料（应当先经杀毒软件等保护软件查杀）导致用户电脑或手机登系统的任何损坏或资料流失，用户应负完全责任。 </p>
  <p>3、用户因本网站获得的任何信息，均不构成任何形式或意义上的承诺或建议，本协议另有约定的除外。 </p>
  <p>4、本网站基于用户评价系统等对拍手等用户做出的推荐行为、为用户提供交易机会、推荐交易方等，雇主仍应当进行充分、审慎的考量和判断，雇主同意本网站对此免责，因此可能造成的任何损失，均由雇主与拍手之间按照相关法律规定承担。
  </p><p style="font-weight: 600;color: rgba(0,0,0,.8)">
      5、本网站提供与其它互联网上的网站或资源的链接，用户可能会因此链接至其它运营商经营的网站，本网站不对链接数据信息承担任何法律责任，此行为由用户自担风险和责任（因连接信息本身造成的损失，应当由该链接指向的其它运营商经营的网站承担），与本网站无关。
  </p>
  <p class="bolds">第八条 知识产权</p>
  <p>
      本网站上显示的（包括但不限于本网站自行发布的、用户发布的）所有数据、图片、信息、内容、资料、作品等以及本网站本身的程序、系统、网站构架、网页设计、数据等所产生的知识产权均归本网站所有。未经本网站同意，任何个人或单位，均不得擅自使用。用户发布的任何图片、信息、资料、作品等均不得侵犯第三方权益。
  </p>
  <p class="bolds">第九条 隐私权</p>
  <p>用户提供到本网站的任何信息，除明确要求不得公示或要求隐秘之外，本网站有权自行使用该信息，包括但不限于广告、推广、活动、经营等使用。
  </p>
  <p class="bolds">第十条 不可抗力</p>
  <p>除法律法规规定的不可抗力之外，黑客攻击、网络病毒、断电、生产安全事故、法律法规政策规章制度等的变更、电信部门技术管制等亦视为不可抗力，因不可抗力的发生造成用户的损失，用户同意本网站因此免责。
  </p>
  <p class="bolds">第十一条 纠纷解决方式</p>
  <p>1、因本协议及其附件而产生的任何法律关系、责任、纠纷处理等，均适用中华人民共和国法律，发生任何争议将适用中华人民共和国法律管辖。 </p>
      2、本网站有权受理并调处用户之间因交易服务产生的纠纷，同时有权单方面独立判断其他用户对您的举报及索偿是否成立，若判断索偿成立，则本网站有权划拨您已支付的担保金或交纳的保证金以及账户余额进行相应偿付。本网站先行垫付的，由您承担补偿责任。因本网站非人民法院，您完全理解并同意，本网站对证据的鉴别能力及对纠纷的处理能力限制，受理交易纠纷完全是基于您的委托，不保证处理结果符合您的期望、不保证做到公平公正合法。</p>
  <p class="bolds" style="padding-left: 10px">3、因履行本协议及其附件发生的纠纷以及在本网站上交易产生的所有纠纷，各方可以委托本网站调处，可自行协商解决，均无果的则可以向上海市嘉定区人民法院提起民事诉讼。拍手委托本网站进行维权的，则本网站有权聘请律师并按照上海市关于律师收费的相关规定支付律师费用，该费用由拍手垫付，由违约方承担，本协议另有约定的除外。</p>
  <p></p>
  <p class="bolds">第十二条 协议的认可</p>
  <p>您对本协议理解和认同，您即对本协议所有组成部分的内容理解并认同，一旦您使用本网站提供的任何服务，注册用户之间、注册用户与本公司之间即受本协议所有组成部分的约束。
  </p>
  <p class="bolds">第十三条 红砖拍牌网对本服务协议包括基于本服务协议制定的各项规则拥有最终解释权。</p>
</div>`;

  useEffect(() => {
    const el1 = document.getElementById("protocol_employer");
    const el2 = document.getElementById("protocol_shop");
    const el3 = document.getElementById("protocol_shop2");

    function protocolEmployer(event) {
      // do something
      Taro.navigateTo({
        url: "/pages/protocol/employer",
      });
    }
    function protocolShop(event) {
      // do something
      Taro.navigateTo({
        url: "/pages/protocol/shop",
      });
    }
    el1.addEventListener("tap", protocolEmployer);
    el2.addEventListener("tap", protocolShop);
    el3.addEventListener("tap", protocolShop);

    return () => {
      el1.removeEventListener("tap", protocolEmployer);
      el2.removeEventListener("tap", protocolShop);
      el3.removeEventListener("tap", protocolShop);
    };
  }, []);
  return (
    <View className="policy" dangerouslySetInnerHTML={{ __html: nodes }}></View>
  );
}

export default Policy;
