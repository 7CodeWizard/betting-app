import React from "react";
import { View, Image, Text } from "react-native";

import { photo_array } from "../../data/dataArray";
import { discount } from "../../data/dataArray";
import styles from "./styles";

export default function Description(props) {
    const key = props.route.params - 3;
    const data = [
        "1、所有优惠以人民币（CNY）为结算金额，以美东时间（EDT）为计时区间。",
        "2、每位玩家、住址、电话、邮箱、相同支付卡/信用卡号、及共享电脑环境（例如网吧、其他公用电脑等）只能拥有一个会员享受优惠红利，如发现同一会员注册多账号行为，将收回全部优惠红利。",
        "3、所有的活动优惠特为玩家而设，如发现任何团体或个人，以不诚实的方式套取红利或任何威胁、滥用公司优惠等行为，公司保留冻结、取消该团体或个人账户及账户结余的权利。",
        "4、TG保留所有解释权，在任何时候都可以更改、停止、取消优惠活动。"
    ]
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.photoContainer}>
                <Image style={styles.photo} source={photo_array[key].photo_url} />
            </View>
            <View style={styles.descriptionContainer}>
                <Text>{discount[key].title}</Text>
                <View style={styles.eventTitle}>
                    <Text style={{ opacity: 0.3 }}>------------------------</Text>
                    <Text>    活动详情    </Text>
                    <Text style={{ opacity: 0.3 }}>------------------------</Text>
                </View>
                <Text style={styles.eventDetail}>{discount[key].details}</Text>
                <View style={styles.eventTitle}>
                    <Text style={{ opacity: 0.3 }}>--------------------</Text>
                    <Text>    活动说明    </Text>
                    <Text style={{ opacity: 0.3 }}>--------------------</Text>
                </View>
                <View style={{ padding: 10 }}>
                    {
                        data.map((item, index) => {
                            return (
                                <Text key={index}>{item}</Text>
                            )
                        })
                    }
                </View>
            </View>
        </View >
    )
}