import React from 'react';
import { ScrollView, View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Product } from './ProductInformation';

type AppContentProps = {
    data: Product[];
};

export default function Products({ data }: AppContentProps) {
    return (
        <ScrollView>
            {data.map(product => (
                <View key={product.productId} style={{ margin: 10 }}>
                    <Card>
                        <Card.Content>
                            <Title>{product.productName}</Title>
                            <Paragraph>{product.productDescription}</Paragraph>
                        </Card.Content>
                        {product.imageURL && <Card.Cover source={{ uri: product.imageURL }} />}
                        <Card.Actions>
                        </Card.Actions>
                    </Card>
                </View>
            ))}
        </ScrollView>
    );
}
