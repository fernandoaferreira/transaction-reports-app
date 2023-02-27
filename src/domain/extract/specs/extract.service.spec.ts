import { Test, TestingModule } from '@nestjs/testing';
import { ExtractService } from '../extract.service';
import { PrismaService } from '../../prisma/prisma.service';

describe('ExtractService', () => {
  let service: ExtractService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: PrismaService,
          useValue: {
            transaction: {
              findMany: jest.fn(),
            },
          },
        },
        ExtractService,
      ],
    }).compile();

    service = module.get<ExtractService>(ExtractService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('### findOne should be sucess', async () => {
    const idUserMock = 1;

    const extractResultMock = [
      {
        id: 1,
        operation_type: 'credit',
        trasaction_type: 'pix',
        completed: true,
        value: '20',
        descriprion: 'Pix enviado por terceiros',
        accountId: 1,
        Date: '2023-02-26T13:41:00.000Z',
      },
      {
        id: 1,
        operation_type: 'debit',
        trasaction_type: 'pix',
        completed: true,
        value: '5',
        descriprion: 'Pix enviado por terceiros',
        accountId: 1,
        Date: '2023-02-26T13:41:00.000Z',
      },
    ];

    jest
      .spyOn(prismaService.transaction, 'findMany')
      .mockResolvedValue(extractResultMock as never);

    const findOndeResult = await service.findOne(idUserMock);

    expect(findOndeResult.totalBalance).toBe(15);
  });
});
