package com.app.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data         // @Data is a convenient shortcut annotation that bundles the features of @ToString, @EqualsAndHashCode, @Getter / @Setter, and @RequiredArgsConstructor.
@NoArgsConstructor
@AllArgsConstructor
public class OrderResponse {
 private String id;
 private int amount;
 private String currency;
 private String receipt;
 private String status;
}
