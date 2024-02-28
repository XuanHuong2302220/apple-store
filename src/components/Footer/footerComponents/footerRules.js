import React from "react";
import { Box, Flex, Text, Button, Link } from "@chakra-ui/react";

export const TextFooter = ({ children }) => {
    return (
      <Text pb='10px'>
        {children}
      </Text>
    );
  };

export default function FooterRules() {
  return (
    <Box>
      <Box pb="20px">
        <Text>
          Giá hiển thị đã bao gồm tất cả các khoản thuế. Giao hàng miễn phí cho
          tất cả đơn hàng.
        </Text>
        <Text>Apple Pencil được bán riêng.</Text>
      </Box>
      <TextFooter>
        Tham khảo chính sách{" "}
        <Link href="facebook.com" color='red'>
          vận chuyển & giao hàng{" "}
        </Link>
        cũng như chính sách{" "}
        <Link href="youtube.com" color='red'>
          thanh toán{" "}
        </Link>
        của chúng tôi để biết thêm thông tin về ưu đãi hợp lệ.
      </TextFooter>
      <Text>
        * Chương trình Trả Góp Hàng Tháng Với MoMo do (các) đối tác tín dụng
        cung cấp qua ứng dụng MoMo của Công Ty Cổ Phần Dịch Vụ Di Động Trực
        Tuyến (“MoMo”) chứ không phải Apple. Chỉ cư dân Việt Nam đủ điều kiện
        mới có thể mua sản phẩm đủ điều kiện qua chương trình này. Tất cả sản
        phẩm được mua qua hình thức Trả Góp Hàng Tháng Với MoMo đều cần có tài
        khoản ví điện tử MoMo và phải được (các) đối tác tín dụng của MoMo phê
        duyệt. Nếu bạn có câu hỏi về điều kiện tín dụng của mình, vui lòng liên
        hệ với MoMo để nhận câu trả lời từ (các) đối tác tín dụng của MoMo.
        Ngoài ra, vui lòng tham khảo ứng dụng MoMo hoặc (các) đối tác tín dụng
        của MoMo để biết điều kiện, phí và phụ phí. Apple có toàn quyền quyết
        định sản phẩm nào đủ điều kiện hưởng ưu đãi trả góp vào bất cứ lúc nào.
        Mọi thay đổi về việc lựa chọn sản phẩm, kỳ hạn trả góp và phí dịch vụ
        đều sẽ làm thay đổi ưu đãi trả góp hàng tháng. Phí dịch vụ quy định là
        phí được tính theo phần trăm hàng tháng. Áp dụng số tiền mua tối thiểu
        4.290.000đ cho sản phẩm đủ điều kiện và cần phải thanh toán trước 30%
        cho mọi sản phẩm bạn mua.
      </Text>
      <Text>
        {" "}
        Đơn hàng phải được đặt trên Apple Store Trực Tuyến
        <Link href="www.apple.com/vn." color='red'>
          {" "}
          www.apple.com/vn.
        </Link>
      </Text>
      <Text>
        Sản phẩm được mua từ Apple Store Trực Tuyến Dành cho Doanh Nghiệp và
        Apple Store Trực Tuyến Dành Cho Ngành Giáo Dục không đủ điều kiện hưởng
        ưu đãi trả góp hàng tháng của MoMo.
      </Text>
      <TextFooter>
        Tiền sẽ được tính vào tài khoản MoMo của bạn khi sản phẩm được vận
        chuyển đến bạn. Phí dịch vụ hàng tháng trong ưu đãi trả góp của MoMo
        được tính dựa trên giá bán lẻ của sản phẩm do Apple cung cấp. Giá được
        hiển thị đã bao gồm thuế GTGT. Số tiền thanh toán hàng tháng được hiển
        thị chỉ là con số ước tính. Số tiền thanh toán hàng tháng thực tế của
        bạn sẽ được hiển thị trong phần báo cáo sử dụng trên ứng dụng MoMo. Khi
        bạn chọn thanh toán qua hình thức Trả Góp Hàng Tháng Với MoMo, Apple có
        thể sẽ cần chia sẻ số điện thoại di động của bạn với MoMo để xác minh
        danh tính và hoàn tất yêu cầu thanh toán của bạn. Apple sẽ luôn xử lý
        thông tin của bạn theo Chính Sách Quyền Riêng Tư của Apple, có tại {" "}
        <Link href="www.apple.com/legal/privacy/vn." color='red'>
          www.apple.com/legal/privacy/vn.
        </Link>{" "}
        Mọi thông tin do MoMo thu thập sẽ tuân thủ chính sách quyền riêng tư của
        họ.
      </TextFooter>
      <TextFooter>
        ⁺ Chỉ dành cho thuê bao mới. 65.000đ/tháng sau thời gian dùng thử. Ưu
        đãi trong thời gian có hạn dành cho thuê bao mới kết nối thiết bị hợp lệ
        với thiết bị Apple chạy iOS 15 hoặc iPadOS 15 trở lên. Ưu đãi có hiệu
        lực 3 tháng sau khi kết nối với thiết bị hợp lệ. Người hiện đang sở hữu
        các thiết bị hợp lệ không cần phải mua sản phẩm âm thanh. Gói cước sẽ tự
        động gia hạn cho đến khi bị hủy. Có áp dụng hạn chế và{" "}
        <Link href="tiktok.com" color='red'>
          các điều khoản
        </Link>{" "}
        khác
      </TextFooter>
      <TextFooter>
        sẽ tự động gia hạn cho đến khi bị hủy. Có áp dụng hạn chế và các điều
        khoản khác. ° Chỉ dành cho người đăng ký mới và người đăng ký lại đủ
        điều kiện. 179.000đ/tháng sau thời gian dùng thử miễn phí. Chỉ áp dụng
        một ưu đãi cho mỗi ID Apple và một ưu đãi cho mỗi gia đình nếu bạn là
        thành viên của nhóm Chia Sẻ Trong Gia Đình, bất kể số lượng thiết bị bạn
        hoặc gia đình bạn mua. Ưu đãi này không còn hiệu lực nếu trước đây bạn
        hoặc gia đình đã từng nhận ưu đãi sử dụng Apple TV+ miễn phí trong ba
        tháng hoặc một năm. Ưu đãi có hiệu lực 3 tháng sau khi kích hoạt thiết
        bị hợp lệ. Gói đăng ký sẽ tự động gia hạn cho đến khi bị hủy. Có áp dụng
        hạn chế và{" "}
        <Link href="tiktok.com" color='red'>
          các điều khoản
        </Link>{" "}
        khác
      </TextFooter>
      <TextFooter>
        1. Dịch vụ trao đổi do đối tác trao đổi của Apple cung cấp. Định giá giá
        trị trao đổi chỉ là giá trị ước tính và giá trị thực tế có thể thấp hơn
        giá trị ước tính. Giá trị trao đổi sẽ khác nhau tùy theo tình trạng, năm
        và phiên bản của thiết bị bạn trao đổi. Không phải tất cả các thiết bị
        đều đủ điều kiện nhận điểm tín dụng. Bạn phải từ 18 tuổi trở lên mới đủ
        điều kiện đổi thiết bị lấy điểm tín dụng. Giá trị trao đổi có thể được
        áp dụng khi mua thiết bị mới đủ điều kiện. Ước tính giá trị thực tế được
        dựa trên việc có nhận được thiết bị đủ điều kiện khớp với thông tin bạn
        đã mô tả hay không. Thuế Giá Trị Gia Tăng (VAT) có thể được tính trên
        toàn bộ giá trị của giao dịch mua thiết bị mới. Đối tác trao đổi của
        Apple có quyền từ chối hoặc giới hạn số lượng của bất kỳ giao dịch trao
        đổi nào vì bất kỳ lý do gì. Bạn có thể tìm hiểu thêm thông tin về chương
        trình trao đổi thiết bị từ đối tác trao đổi của Apple và thông tin về
        tái chế thiết bị đủ điều kiện từ đối tác tái chế. Các hạn chế và giới
        hạn có thể được áp dụng. Đối với tái chế thiết bị đủ điều kiện, có thể
        áp dụng các điều khoản và hạn chế.
      </TextFooter>

      <TextFooter>
        2. Có áp dụng mức giá đặc biệt cho khách hàng đủ điều kiện. Để tìm hiểu
        thêm về cách bắt đầu quy trình đăng ký nhận mức giá đặc biệt, hãy gọi
        cho chúng tôi qua số 1800-1192.
      </TextFooter>

      <TextFooter>
        Chúng tôi sử dụng vị trí của bạn để hiển thị cho bạn các lựa chọn giao
        hàng nhanh hơn. Chúng tôi đã tìm thấy vị trí của bạn bằng địa chỉ IP của
        bạn hoặc vì bạn đã nhập vị trí đó trong lần truy cập Apple trước đó.
      </TextFooter>

        <Box border='1px solid #D2D2D7' />
    </Box>

  );
}
