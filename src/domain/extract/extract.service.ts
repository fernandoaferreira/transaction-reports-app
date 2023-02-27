import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ExtractService {
  constructor(private prisma: PrismaService) {}

  async findOne(id: number) {
    const extractCurrent = await this.prisma.transaction.findMany({
      where: { accountId: id },
    });

    const balanceTotal = await this.calculateTotalBalance(extractCurrent);

    return {
      transactions: extractCurrent,
      totalBalance: balanceTotal,
    };
  }

  async calculateTotalBalance(extractCurrent: any[]) {
    const alldebitValues = extractCurrent.filter((transaction: any) => {
      if (transaction.operation_type === 'debit') {
        return transaction.value;
      }
    });

    const totalDebitValues = alldebitValues.reduce(
      (acumulate, transaction) => acumulate + transaction.value,
      0,
    );

    const allCreditsValues = extractCurrent.filter((transaction: any) => {
      if (transaction.operation_type === 'credit') {
        return transaction.value;
      }
    });

    const totalCreditValues = allCreditsValues.reduce(
      (acumulate, transaction) => acumulate + transaction.value,
      0,
    );

    const balanceTotal = Number(totalCreditValues) - Number(totalDebitValues);

    return balanceTotal;
  }
}
